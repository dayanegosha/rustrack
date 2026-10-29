# .rustrack / backend

API на NestJS: авторизация через VK, маршруты, сообщество, друзья и статистика. Данные хранятся в PostgreSQL с PostGIS, для кеша используется Redis.

## запуск

Запустите сервисы из корня проекта через `docker compose up -d`, затем из `backend` скопируйте настройки:

```sh
cp .env.example .env
```

Заполните `.env` и примените миграции из `src/database/migrations` по порядку. Настройка базы и окружения описана в [`DEPLOY.md`](../DEPLOY.md).

```sh
npm install
npm run start:dev
```

API работает на `http://localhost:3001/api/v1`. Адрес frontend задаётся в `FRONTEND_URL`.

## проверка и сборка

```sh
npm test
npm run test:e2e
npm run build
```

Для запуска собранного API: `npm run start:prod`.

## лицензия

[MIT](../LICENSE)
