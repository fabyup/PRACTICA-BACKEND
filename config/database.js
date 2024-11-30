import { createPool } from "mysql2/promise";
import dotenv from "dotenv";

// Cargar las variables de entorno
dotenv.config();

// Crear la conexión a la base de datos
const connection = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

export default connection;
