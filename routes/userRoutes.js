import { Router } from "express";
import userController from "../controllers/userController.js";

const router = Router();
router.get("/usuarios", userController.obtenerUsuarios);
router.post("/usuarios", userController.crearUsuario);
router.get("/saludo", (req, res) => {
  res.send("hola mundo");
});

export default router;
