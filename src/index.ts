import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const app = express();
const PORT = process.env.PORT || 8001;

app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
   res.send('Hello from the GET route!');
});


app.post('/api/message', (req, res) => {
  const { message } = req.body;
  res.send(`You sent: ${message}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
