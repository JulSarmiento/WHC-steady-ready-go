import 'dotenv/config';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET_KEY: string;
      MONGO_USERNAME: string;
      MONGO_PASSWORD: string;
      POSTGRES_USERNAME: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_DATABASE: string;
      POSTGRES_HOST: string;
      POSTGRES_PORT: string;
    }
  }
}

import sequelize from './utils/postgresql.config';
import { ConnectOptions, connect } from 'mongoose';
import listen from './app';

const PORT = process.env.PORT || 3001;

// Mongo connection string
const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.94wxqpb.mongodb.net/products?retryWrites=true&w=majority`;

const start = async () => {
  try {
    await connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as ConnectOptions);
    console.log('Database connected to MongoDB Atlas');

    await sequelize.sync();
    console.log('Database connected to PostgreSQL');

    listen.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
    // proceso nativo de javascript diseñado para terminar el proceso actual.
    process.exit(1);
  };
};

start();

