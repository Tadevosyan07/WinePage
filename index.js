import express from "express";
import dotenv from "dotenv";
import connection from "./Utils/Connection.js";
import seedRouter from "./Router/SeedRouter.js";

const app = express();
dotenv.config();
connection();

const PORT = process.env.PORT;
app.use("/api/seed", seedRouter);
app.listen(PORT, () => {
  console.log(`SERVER RUNING ON PORT ${PORT}`);
});
