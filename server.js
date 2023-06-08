import 'dotenv/config';
import { authenticate, sync } from './src/utils/postgresql.config.js';
import { connect } from 'mongoose';
import { listen } from './src/app.js';

const PORT = process.env.PORT || 3001;

// Mongo connection string
const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.94wxqpb.mongodb.net/products?retryWrites=true&w=majority`;

const start = async () => {
  try {
    await connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Database connected to MongoDB Atlas');

    await authenticate();
    await sync();
    console.log('Database connected to PostgreSQL');

    listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
    // proceso nativo de javascript diseñado para terminar el proceso actual.
    process.exit(1);
  };
};

start();

