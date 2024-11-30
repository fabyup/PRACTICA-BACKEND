// routes/usuarioRoutes.js
import { Routes } from "express";
import userController from "../controllers/userController";

const routes = Routes();

// Ruta para obtener todos los usuarios
routes.get("/usuarios", userController.obtenerUsuarios);

// Ruta para crear un nuevo usuario
routes.post("/usuarios", userController.crearUsuario);

export default routes;
