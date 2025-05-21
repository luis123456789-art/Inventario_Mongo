import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import categoriarouter from "./routes/Categorias.routes.js";

const app = express();

dotenv.config();

app.use("/categoria", categoriarouter);

const PORT = process.env.PORT;

conectarDB();

app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`);
});
