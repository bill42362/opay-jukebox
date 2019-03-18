// index.js
import Express from 'express';
import Helmet from 'helmet';
import fetch from 'node-fetch';

const port = process.env.PORT || 3000;

const server = new Express();
server.use(Helmet());

server.get('/', (request, response) =>
  response.sendFile(path.resolve(__dirname, '../client/html/index.html'))
);

// eslint-disable-next-line no-console
server.listen(port, () => console.log(`Server is listening ${port} port.`));
