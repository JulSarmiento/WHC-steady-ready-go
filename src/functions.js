import { onRequest } from 'firebase-functions/v2/https';
import app from './app';

export const api = onRequest({
  maxInstances: 10,
  secrets: [
    "POSTGRESQL_URL",
    "JWT_SECRET_KEY"
  ]
});