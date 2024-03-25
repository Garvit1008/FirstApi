require("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require('./db/connect'); // Import connectDB function
const PORT = process.env.PORT || 3000;
connectDB(process.env.MONGODB_URL)
  .then(() => {
    app.get('/', (req, res) => {
      res.send('Hi i am live');
    });
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
  app.use('/api/products', require('./routes/product'));