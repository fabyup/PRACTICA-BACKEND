// routes/usuarioRoutes.js
import { Router } from "express";
const router = Router();
import { obtenerUsuarios, crearUsuario } from "../controllers/userController";

// Ruta para obtener todos los usuarios
router.get("/usuarios", obtenerUsuarios);

// Ruta para crear un nuevo usuario
router.post("/usuarios", crearUsuario);

export default router;
