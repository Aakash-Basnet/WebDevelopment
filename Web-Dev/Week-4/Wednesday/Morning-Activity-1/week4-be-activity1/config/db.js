const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/w4-be');
    console.log(`Connected to database: ${conn.connection.host}`);
  } catch (error) {
    console.log('Connection error', error);
  }
};

module.exports = connectDB;
