// routes/usuarioRoutes.js
import { Router } from "express";
import { obtenerUsuarios, crearUsuario } from "../controllers/userController";

const router = Router();

// Ruta para obtener todos los usuarios
router.get("/usuarios", obtenerUsuarios);

// Ruta para crear un nuevo usuario
router.post("/usuarios", crearUsuario);

export default router;
