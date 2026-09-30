const express = require("express");
const cors = require('cors');

const indexRouter = require("./routes/indexRouter")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(/*{
    origin: process.env.CLIENT_URL || 'http://localhost:5173' || 'http://localhost:5174/'
}*/));


app.use("/", indexRouter);













// 404 handler — route not found
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' })
})

// Global error handler — always needs 4 params
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  // Send structured JSON format to client
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    // Show stack trace only in development environment
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});