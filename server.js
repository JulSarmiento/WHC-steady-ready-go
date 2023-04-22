require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 3000;

const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.94wxqpb.mongodb.net/products?retryWrites=true&w=majority`;

const start = async () => {
  try {
    await mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Database connected to MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
    // proceso nativo de javascript diseñado para terminar el proceso actual.
    process.exit(1);
  };
};

start();

