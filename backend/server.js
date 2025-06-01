import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import { dbConnection } from './database/dbConnection.js';

const PORT = process.env.PORT || 4000; // Default to 4000 if PORT is not defined

app.listen(PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
});
dbConnection();