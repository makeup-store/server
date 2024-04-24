const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8888;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`App running on port ${port} `);
});
