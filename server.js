import http from 'http';
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import webpackDevConfig from './webpack.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

dotenv.config();
const { PORT, NODE_ENV } = process.env;
const webPath = path.resolve(__dirname, './build');
const app = express();
const server = http.createServer(app);

if (NODE_ENV === 'production') app.use(express.static(webPath));
else {
  const compiler = webpack(webpackDevConfig);
  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(webPath, 'index.html'));
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
