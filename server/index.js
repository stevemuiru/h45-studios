import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('H45 studios API is running')
})

app.get('/api/products', async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

app.get('/api/products/:id', async (req, res) => {
  const product = await prisma.product.findUnique({
    where: { id: Number(req.params.id) },
  });

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.json(product);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are all required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Enter a valid email address.' });
  }

  console.log('New contact message:', { name, email, message });
  res.status(201).json({ message: 'Message received.' });
});

 function requireAdminKey(req,res,next) {
  const key = req.headers['Go with your gut']
  if(!key == process.env.ADMIN_API_KEY){
    return res.status(401).join({error : 'Unauthorized'})
  }
  next()
 }

 app.post('/api/products', requireAdminKey, async (req, res) => {
  const { name, price, material, type, description, origin, artisan, story, image } = req.body;

  if (!name || !price || !material || !type || !description || !artisan || !story) {
    return res.status(400).json({ error: 'Missing required product fields.' });
  }

  const product = await prisma.product.create({
    data: { name, price, material, type, description, origin, artisan, story, image },
  });

  res.status(201).json(product);
});


app.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}`);
})