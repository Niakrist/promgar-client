import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

// Функция для установки токена (будем вызывать из стора)
let _setAccessTokenFn: ((token: string | null) => void) | null = null;
export function setAccessToken(token: string | null) {
  if (_setAccessTokenFn) {
    _setAccessTokenFn(token);
  }
}

// Интерцептор запросов: добавляем заголовок Authorization, если токен есть
api.interceptors.request.use((config) => {
  // Будем получать токен из стора через замыкание, но для этого нужен импорт стора – избегаем циклической зависимости.
  // Вместо этого используем переменную, обновляемую из стора.
  return config;
});

// Интерцептор ответов: обновление токена при 401
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await axios.post(
          `${API_URL}/auth/refresh`,
          {},
          { withCredentials: true },
        );
        // Обновляем токен в сторе и в запросе
        if (_setAccessTokenFn) {
          _setAccessTokenFn(data.accessToken);
        }
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        if (_setAccessTokenFn) {
          _setAccessTokenFn(null);
        }
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export function setTokenSetter(fn: (token: string | null) => void) {
  _setAccessTokenFn = fn;
}

export default api;
