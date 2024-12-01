import { Router } from "express";
import userController from "../controllers/userController"; // Importamos el controlador

const router = Router(); // Aquí estamos creando un enrutador

// Definimos las rutas
router.get("/usuarios", userController.obtenerUsuarios); // Ruta para obtener usuarios
router.post("/usuarios", userController.crearUsuario); // Ruta para crear usuario

// Exportamos el router
export default router;
