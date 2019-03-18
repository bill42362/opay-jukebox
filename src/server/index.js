// index.js
import path from 'path';
import Express from 'express';
import Helmet from 'helmet';
import fetch from 'node-fetch';

const port = process.env.PORT || 3000;

const server = new Express();
server.use(Helmet());

server.use(Express.static(`${__dirname}/../client`));
server.get('/', (request, response) => response.redirect('/generator'));
server.get('/generator', (request, response) =>
  response.sendFile(path.resolve(__dirname, '../client/html/generator.html'))
);
server.get('/view', (request, response) =>
  response.sendFile(path.resolve(__dirname, '../client/html/view.html'))
);

// eslint-disable-next-line no-console
server.listen(port, () => console.log(`Server is listening ${port} port.`));
