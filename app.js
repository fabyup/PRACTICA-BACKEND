// server.js
import express, { json } from "express";
import { config } from "dotenv";
import userRoutes from "./routes/userRoutes";
import cors from "cors";

// Cargar variables de entorno
config();

// Crear la aplicación Express
const app = express();

// Middleware
app.use(json()); // Para parsear JSON
app.use(cors()); // Permitir peticiones CORS (si es necesario)

// Rutas
app.use("/api", userRoutes);

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
