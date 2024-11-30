// routes/usuarioRoutes.js
import { Router } from "express";
import userController from "../controllers/userController";

const router = Router();

// Ruta para obtener todos los usuarios
router.get("/usuarios", userController.obtenerUsuarios);

// Ruta para crear un nuevo usuario
router.post("/usuarios", userController.crearUsuario);

export default router;
