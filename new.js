require("dotenv").config();
const http = require("http");
const productController = require("./Controller/product");
const cors = require("cors");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const axios = require("axios");
console.log("env", process.env.DB_PASSWORD);

const { type } = require("os");
const server = express();
const productRouter = require("./Routers/productR");
const userRouter = require("./Routers/userR");
// server.use((req, res, next) => {
//   console.log(req.method, req.ip, req.hostname, new Date());
//   next();
// });

// CONNECTING DATABASE
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// *************** MAKING SCHEMA *****************
// const { Schema } = mongoose;

// const productSchema = new Schema({
//   title: String,
//   description: String,
//   price: Number,
//   discountPercentage: Number,
//   rating: Number,
//   stock: Number,
//   brand: String,
//   category: String,
//   thumbnail: String,
//   images: [String],
// });

// const Product = mongoose.model("Product", productSchema);
server.use(cors());
server.use(morgan("default"));

// BODYPARSER
server.use(cors());
server.use(express.json());
// server.use(express.urlencoded());

server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
server.use("/products", productRouter.Router);
server.use("/users", userRouter.Router);
server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

// const auth = (req, res, next) => {
//   console.log(req.query);
//   // if (req.body.password == "123") {
//   //   next();
//   // } else {
//   //   res.sendStatus(401);
//   // }
//   next();
// };

// server.use(auth);
// ********* API - ENDPOINT - ROUTE ***************

// ************** M V C model-view-controller ***************

server.get("/demo", (req, res) => {
  // res.json(products);
  // res.sendStatus(201).send("<h1>Hello<h1/>");
  // res.sendFile("/Users/harshitjharotiya/Desktop/Node.js_tutorial/index.html");
});

server.listen(8080, () => {
  console.log("sever started");
});

//*************** STANDARD NODE.JS ************

// const server = http.createServer((req, res) => {
//   //   const data = { age: 5 };
//   console.log(req.url);

//   if (req.url.startsWith("/product")) {
//     const id = req.url.split("/")[2];
//     const product = products.find((p) => p.id === +id);
//     console.log(product);
//     res.setHeader("Content-Type", "text/html");
//     let modifiedIndex = index
//       .replace("**title**", product.title)
//       .replace("**URL**", product.thumbnail)
//       .replace("**price**", product.price)
//       .replace("**rating**", product.rating);
//     res.end(modifiedIndex);
//     return;
//   }

//   switch (req.url) {
//     case "/":
//       res.setHeader("Content-type", "text/html");
//       res.end(index);
//       break;

//     case "/product":
//       res.setHeader("Content-type", "text/html");
//       let modifiedIndex = index
//         .replace("**title**", product.title)
//         .replace("**URL**", product.thumbnail)
//         .replace("**price**", product.price)
//         .replace("**rating**", product.rating);
//       res.end(modifiedIndex);
//       break;

//     case "/api":
//       res.setHeader("Content-type", "application/json");
//       res.end(JSON.stringify(data));
//       break;
//     default:
//       res.writeHead(404, "Nt founD");
//   }

//   console.log("server started");
//   res.setHeader("Dummy", "DummyValue");
//   //   res.end("<h1>hello world<h1/>");
//   //   res.setHeader("Content-Type", "application/json");
//   res.setHeader("Content-Type", "text/html");
//   res.end(index);
// });

// server.listen(8080);
