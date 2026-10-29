# .rustrack / frontend

PWA на Next.js: карта путешествий, маршруты, сообщество и профиль. Карта работает через VK Maps / Mappable, интерфейс доступен на русском, английском и китайском языках.

## запуск

Из `frontend`:

```sh
cp .env.local.example .env.local
```

Заполните `.env.local`: адреса API и WebSocket, настройки VK ID и ключ `NEXT_PUBLIC_VK_MAPS_API_KEY`. API запускается отдельно из `backend`.

```sh
npm install
npm run dev
```

Приложение работает на `http://localhost:3000`.

## проверка и сборка

```sh
npm run lint
npm run build
npm start
```

Переменные `NEXT_PUBLIC_*` попадают в бандл при сборке. После смены ключа карт или адреса API нужно пересобрать приложение.

Настройка сервера описана в [`DEPLOY.md`](../DEPLOY.md).

## лицензия

[MIT](../LICENSE)
