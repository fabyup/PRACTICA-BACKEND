// app.js

import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes";

// Cargar las variables de entorno
dotenv.config();

// Crear la aplicación Express
const app = express();

// Middleware
app.use(json()); // Para parsear JSON
app.use(cors()); // Para habilitar CORS

// Rutas
app.use("/api", userRoutes);

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
process.on("uncaughtException", error => {
  console.error("Uncaught Exception:", error);
  process.exit(1); // Cierra el proceso si hay un error no manejado
});

process.on("unhandledRejection", error => {
  console.error("Unhandled Rejection:", error);
  process.exit(1); // Cierra el proceso si hay una promesa rechazada no manejada
});
