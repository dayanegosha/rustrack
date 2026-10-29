# .rustrack / backend

API на NestJS: авторизация через VK, маршруты, сообщество, друзья и статистика. данные хранятся в PostgreSQL с PostGIS, для кеша используется Redis.

## запуск

запустите сервисы из корня проекта через `docker compose up -d`, затем из `backend` скопируйте настройки:

```sh
cp .env.example .env
```

заполните `.env` и примените миграции из `src/database/migrations` по порядку. настройка базы и окружения описана в [`DEPLOY.md`](../DEPLOY.md).

```sh
npm install
npm run start:dev
```

API работает на `http://localhost:3001/api/v1`. адрес frontend задаётся в `FRONTEND_URL`.

## проверка и сборка

```sh
npm test
npm run test:e2e
npm run build
```

для запуска собранного API: `npm run start:prod`.

## лицензия

[MIT](../LICENSE)
