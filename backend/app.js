// backend/app.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const infoRoutes = require("./routes/infoRoutes");
app.use("/info", infoRoutes);

app.listen(5000, () => console.log("Backend running on port 5000"));
