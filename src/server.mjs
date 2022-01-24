import express from "express";
import cors from "cors";
import config from "./config/index.mjs";
import db from "./config/db.mjs";
import userRouter from "./api/user.mjs";

const app = express();

db(config.MONGO_URI, app);

app.use(cors({ origin: true }));
app.use(express.json());
app.use("/api/user", userRouter);

app.listen(config.PORT, () =>
  console.log(`App listening on PORT ${config.PORT}`)
);
