// routes/usuarioRoutes.js
const Routes = require("../routes/userRoutes");
const crearUsuario = require("../controllers/userController");
const obtenerUsuarios = require("../controllers/userController");

const routes = Routes();

// Ruta para obtener todos los usuarios
routes.get("/usuarios", obtenerUsuarios);

// Ruta para crear un nuevo usuario
routes.post("/usuarios", crearUsuario);
