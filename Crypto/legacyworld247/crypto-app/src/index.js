const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());  // Allow all origins (for dev mode)

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Change * to specific domains in production
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
