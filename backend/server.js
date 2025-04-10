const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });
console.log('DEBUG MONGO_URI:', process.env.MONGO_URI);

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB prisijungimas

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// MongoDB prisijungimas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Prisijungta prie MongoDB!');

    // Startuojam serverį tik kai prisijungiam prie DB
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('MongoDB klaida:', err));
