import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import db from './config/connection.js';
import routes from './routes/index.js';

await db();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", routes);

// if (process.env.NODE_ENV === 'production') {
  console.log('Production mode');
  app.use(express.static(path.join(__dirname, '../../client/dist')));

   app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  });
// }

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
