# Async Request Batching and Caching Quickstart

1. Install packages and dependencies
```
npm install
```

2. Populate data into database
```
npm run populate
```

3. Start the server, run:
```
npm start
```

To test the server with multiple concurrent request, simply run:
```
node loadTest.js
```

In the `server.js`, you can comment/uncomment each import line of the `totalProducts` function for different test cases.
