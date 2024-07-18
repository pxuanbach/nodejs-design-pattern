import express from 'express';
// import { totalQuantity } from './totalQuantity.js';
import { totalQuantity } from './totalQuantityBatch.js';

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/total-quantity', async (req, res) => {
  const { product } = req.query;
  const total = await totalQuantity(product);
  res.status(200).json({
    product,
    total
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})
