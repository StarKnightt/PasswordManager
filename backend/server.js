const express = require('express');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const cors = require('cors');

dotenv.config(); // Ensure this is at the very top

const app = express();
const port = 3000;

app.use(express.json()); // Use express's built-in body parser
// app.use(cors({ origin: '*' })); // Enable CORS
app.use(cors({ origin: 'https://password-manager-git-main-starknightts-projects.vercel.app/' }))

// MongoDB connection
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect().then(() => {
  console.log("Connected successfully to MongoDB");

  // Get the database instance
  const db = client.db('LockMagic'); // Replace 'LockMagic' with your actual database name

  // Get the collection
  const collection = db.collection('passwords');

  // Get all the passwords
  app.get('/', async (req, res) => {
    try {
      const findResult = await collection.find({}).toArray();
      res.json(findResult);
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });

  // Save a password
  app.post('/', async (req, res) => {
    try {
      const password = req.body;
      const insertResult = await collection.insertOne(password);
      res.send({ success: true, result: insertResult });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });

  // Delete a password by id
  app.delete('/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const deleteResult = await collection.deleteOne({ id });
      if (deleteResult.deletedCount === 1) {
        res.send({ success: true, message: 'Password deleted successfully' });
      } else {
        res.status(404).send({ success: false, message: 'Password not found' });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });

  app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
  });
}).catch(error => {
  console.error("Failed to connect to MongoDB", error);
});