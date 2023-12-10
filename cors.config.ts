import { CorsOptions } from 'cors';

const corsConfig: CorsOptions = {
  origin: 'http://localhost:4200', // Replace with the appropriate origin URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

export default corsConfig;
