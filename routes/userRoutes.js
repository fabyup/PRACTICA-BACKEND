// routes/usuarioRoutes.js
const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

// Ruta para obtener todos los usuarios
router.get("/usuarios", usuarioController.obtenerUsuarios);

// Ruta para crear un nuevo usuario
router.post("/usuarios", usuarioController.crearUsuario);

module.exports = router;
