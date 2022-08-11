const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const contactsRouter = require("./routes/api/contacts");

const usersRouter = require("./routes/api/users");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.get("/", (req, res) => {
  res.send(
    "<h3>For get a list of contacts go to http://localhost:3000/api/contacts</h3>"
  );
});

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/contacts", contactsRouter);

app.use("/api/users", usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
