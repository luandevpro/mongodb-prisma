require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

const routerApp = require("./routers");

app.use(cors({ credentials: true, origin: true, exposedHeaders: "*" }));
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(express.json({ type: "*/*", limit: "50mb" }));

app.use("/api", routerApp);

app.listen(PORT, () => {
  console.log(`Worker ${process.pid} started`);
  console.log(`Timezones by location application is running on port ${PORT}.`);
});
