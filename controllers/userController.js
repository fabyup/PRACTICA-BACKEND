import connection from "../config/database.js";

const obtenerUsuarios = async (req, res) => {
  try {
    const [rows] = await connection.execute("SELECT * FROM usuarios");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuarios", error });
  }
};

const crearUsuario = async (req, res) => {
  const { nombre, email } = req.body;
  try {
    const [
      result
    ] = await connection.execute(
      "INSERT INTO usuarios (nombre, email) VALUES (?, ?)",
      [nombre, email]
    );
    res.status(201).json({ message: "Usuario creado", id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: "Error al crear usuario", error });
  }
};

export default { obtenerUsuarios, crearUsuario };
