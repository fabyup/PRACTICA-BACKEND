import { Router } from "express";
import userController from "../controllers/userController.js";

const router = Router();
router.get("/usuarios", userController.obtenerUsuarios);
router.post("/usuarios", userController.crearUsuario);

export default router;
