const mongoose = require('mongoose');

const connectDB = async () => {
 await mongoose.connect(
  "mongodb+srv://kunalkushwah7104:8k1Lud1eUpDUuQgN@cluster0.l5bqvgz.mongodb.net/devTinderr"
 );
};


module.exports = connectDB;