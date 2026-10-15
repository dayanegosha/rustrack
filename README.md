# .rustrack

Карта путешествий по России, которая открывается по мере поездок.

Приложение записывает маршруты, отмечает посещённые регионы и собирает личную карту страны. Есть общие места, обновления в реальном времени, вход через VK и интерфейс на русском, английском и китайском языках.

## запуск

Скопируйте примеры настроек:

```sh
cp backend/.env.example backend/.env
cp frontend/.env.local.example frontend/.env.local
docker compose up -d
```

После запуска PostgreSQL, PostGIS, Redis и S3 примените миграции из `backend/src/database/migrations`, затем запустите обе части проекта:

```sh
cd backend
npm install
npm run start:dev
```

```sh
cd frontend
npm install
npm run dev
```

Frontend работает на `http://localhost:3000`, API — на `http://localhost:3001/api/v1`.

Архитектура описана в [`RUSTRACK_ARCHITECTURE.md`](RUSTRACK_ARCHITECTURE.md), развёртывание — в [`DEPLOY.md`](DEPLOY.md).

## лицензия

[MIT](LICENSE)
