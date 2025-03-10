const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT } = process.env;

mongoose
  .connect(DB_HOST)
  .then(
    () => app.listen(PORT),
    console.log("Server is running. Database connection success")
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
