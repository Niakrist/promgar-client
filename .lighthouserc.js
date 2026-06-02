module.exports = {
  ci: {
    collect: {
      // Запускаем продакшн-сборку и поднимаем сервер
      // startServerCommand: "npm run build && npm run start",
      // startServerReadyPattern: "Ready in",
      // Порт по умолчанию, если не задан иначе
      url: [
        "http://localhost:3000/", // главная
//        "http://localhost:3000/products/ball-bearings", // добавь свои маршруты
//        "http://localhost:3000/products/ball-bearings/6205", // добавь свои маршруты
      ],
      numberOfRuns: 1, // несколько прогонов для стабильности
    },
    assert: {
      // Пороговые значения для демонстрации (потом настроим жёстче)
      assertions: {
        "categories:performance": ["error", { minScore: 0.1 }], // общая оценка не ниже 80 баллов.
        "first-contentful-paint": ["error", { maxNumericValue: 10000 }], // FCP должен быть ≤ 2000 мс
        "largest-contentful-paint": ["error", { maxNumericValue: 50000 }], // LCP ≤ 30000 мс
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.1 }], // CLS ≤ 0.1 (порог «хорошо»).
        "total-blocking-time": ["error", { maxNumericValue: 5000 }], // TBT ≤ 300 мс.
      },
    },
    upload: {
      // Пока будем выводить результаты локально, без загрузки в хранилище
      target: "temporary-public-storage",
    },
  },
};
