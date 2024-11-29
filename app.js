// server.js
const express = require("express");
const dotenv = require("dotenv");
const usuarioRoutes = require("./routes/usuarioRoutes");
const cors = require("cors");

// Cargar variables de entorno
dotenv.config();

// Crear la aplicación Express
const app = express();

// Middleware
app.use(express.json()); // Para parsear JSON
app.use(cors()); // Permitir peticiones CORS (si es necesario)

// Rutas
app.use("/api", usuarioRoutes);

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
