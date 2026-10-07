import express from "express";
import "dotenv/config";
import { startDB } from "./src/config/database.js";

const PORT = process.env.PORT;
const app = express();

app.listen(PORT, async () => {
  await startDB();
  console.log("El servidor se lanzó en el puerto", PORT);
});
