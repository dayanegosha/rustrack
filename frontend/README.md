# .rustrack / frontend

PWA на Next.js: карта путешествий, маршруты, сообщество и профиль. карта работает через VK maps / mappable, интерфейс доступен на русском, английском и китайском языках.

## запуск

из `frontend`:

```sh
cp .env.local.example .env.local
```

заполните `.env.local`: адреса API и WebSocket, настройки VK ID и ключ `NEXT_PUBLIC_VK_MAPS_API_KEY`. API запускается отдельно из `backend`.

```sh
npm install
npm run dev
```

приложение работает на `http://localhost:3000`.

## проверка и сборка

```sh
npm run lint
npm run build
npm start
```

переменные `NEXT_PUBLIC_*` попадают в бандл при сборке. после смены ключа карт или адреса API нужно пересобрать приложение.

настройка сервера описана в [`DEPLOY.md`](../DEPLOY.md).

## лицензия

[MIT](../LICENSE)
