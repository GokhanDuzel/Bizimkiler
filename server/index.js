require('dotenv').config();
const connectDB = require('./db'); // Add this line to require db.js
connectDB(); // And this line to invoke the connection function

const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
