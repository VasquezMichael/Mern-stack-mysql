import express from "express";
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/task.routes.js";
const app = express();
app.use(express.json()); //Es importante utilizar express.json para poder recibir las req body

app.listen(PORT);
app.use(taskRoutes);
app.use(indexRoutes);

console.log(`server is runnig on port ${PORT} `);
