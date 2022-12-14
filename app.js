const express = require("express");
const cors = require("cors");
const newsRouter = require("./routes/newsRouter");

const app = express();
app.use(cors());
app.use(express.json())
app.use("/api", newsRouter);

app.use((req, res) => { // for all other addresses
    res.status(404).json({ message: 'Not found' })
  })

app.use((err, req, res, next) => {
const {status = 500, message = "Server error"} = err
res.status(status).json({ message })
})
  
  module.exports = app;