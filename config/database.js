import { createPool } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const connection = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const testConnection = async () => {
  try {
    const [rows] = await connection.query("SELECT 1 + 1 AS result");
    console.log("Conexión exitosa:", rows[0].result);
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
};

testConnection();

export default connection;
