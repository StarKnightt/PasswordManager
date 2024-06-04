const express = require('express');
const dotenv = require('dotenv');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');

dotenv.config();  // Ensure this is at the very top
// Connection URL
const url = process.env.MONGO_URI;  // This line uses the environment variable
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
// Database Name
const dbName = 'LockMagic';  // This should match the database name in your connection string
const app = express();
const port = 3000;

app.use(express.json()); // Use express's built-in body parser
app.use(cors({ origin: ['https://password-manager-git-main-starknightts-projects.vercel.app', 'http://localhost:3000'] }));

client.connect().then(() => {
  console.log("Connected successfully to MongoDB");

  const db = client.db(dbName);
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
