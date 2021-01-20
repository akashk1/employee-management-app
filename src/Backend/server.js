var express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const app = express();
app.use(cors());
const url =
  "mongodb+srv://test123:test123@cluster0.23vpn.mongodb.net/EmployeeDb?retryWrites=true&w=majority";

mongoose.connect(url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb connection is established");
});
app.use(express.json());
app.use("/users", userRoutes);
const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
  console.log(`Running in port ${port}`);
});
