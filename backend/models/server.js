const express = require("express");
const cors = require("cors");
const path = require("path");


const fileUpload = require("express-fileupload");
const { dbConnection } = require("../database.js/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/users";
    this.productPath = "/api/products";
  

    this.connectedDB();

    this.middlewares();
    this.routes();
  }

  async connectedDB() {
    await dbConnection();
  }

  middlewares() {
    // Cors
    this.app.use(cors());

    // parseo y lectura del body
    this.app.use(express.json());

    // static
    // const __dirname = path.resolve();
    // this.app.use(express.static(path.join(__dirname, "/frontend/build")));
    // this.app.get("*", (req, res) =>
    // res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
    // );

    // File upload
    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
      })
    );

    //

    //
    this.app.get("/", (req, res) => {
      res.send("Server is ready");
    });
  }

  routes() {
    this.app.use(this.usersPath, require("../routes/userRouter"));
    this.app.use(this.productPath, require("../routes/productRouter"));
    
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("server working in", this.port);
    });
  }
}

module.exports = Server;
