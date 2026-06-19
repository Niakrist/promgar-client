import api, { setAccessToken } from "@/entities/lib/axios";
import { create } from "zustand";

interface User {
  id: number;
  username: string;
  role: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  isLoading: false,

  login: async (username, password) => {
    set({ isLoading: true });
    try {
      const { data } = await api.post("/auth/login", { username, password });
      set({ user: data.user, accessToken: data.accessToken });
      setAccessToken(data.accessToken);
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    try {
      await api.post("/auth/logout");
    } catch (e) {
      // игнорируем ошибку при выходе
    }
    set({ user: null, accessToken: null });
    setAccessToken(null);
  },

  refresh: async () => {
    set({ isLoading: true });
    try {
      const { data } = await api.post("/auth/refresh");
      set({ user: data.user, accessToken: data.accessToken });
      setAccessToken(data.accessToken);
    } catch (error) {
      set({ user: null, accessToken: null });
      setAccessToken(null);
    } finally {
      set({ isLoading: false });
    }
  },
}));

useAuthStore.subscribe((state) => {
  // Передаём функцию, которая устанавливает заголовок Authorization в axios
  // Но сам токен будем подставлять в интерцепторе запросов через переменную.
  // Проще обновлять переменную в axios через setAccessToken.
  // Поэтому в интерцепторе запросов просто читаем токен из стора? Избегаем циклической зависимости.
  // Лучше хранить переменную `accessToken` прямо в модуле axios.
});
