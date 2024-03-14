const app = require("./app.js");
const connectdb = require("./db/Database.js");

//  handling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server to handle uncaught exception");
});

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

//connect db
connectdb();

//creating server
const server = app.listen(process.env.PORT, () => {
  console.log(`server is running on  http://localhost:${process.env.PORT}`);
});

//unhandle promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`shutting down the server for ${err.message}`);
  console.log('shutting down the server to unhandle promise rejection');

  server.close(() => {
    process.exit(1);
  });
});
