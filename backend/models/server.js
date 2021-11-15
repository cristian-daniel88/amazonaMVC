const express = require("express");
const cors = require("cors");
const path = require("path");


const fileUpload = require("express-fileupload");
const { dbConnection } = require("../database.js/config");
const { socketController } = require("../sockets/controller");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/users";
    this.productPath = "/api/products";
    this.server = require('http').createServer(this.app);
    this.io = require('socket.io')(this.server, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]

      }
    })
  
    this.sockets();
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

    this.app.use(express.static('public'));

  

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

  listen2() {
    this.app.listen(this.port, () => {
      console.log("server working in", this.port);
    });
  }
  listen() {
    this.server.listen(this.port, () => {
      console.log("server working in", this.port);
    });
  }

  sockets() {
    this.io.on('connection' ,(socket)=> socketController(socket, this.io));
  }

}

module.exports = Server;
