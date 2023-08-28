const express = require("express");
const userController = require("../Controller/user");

const Router = express.Router();

Router.post("/", userController.createProduct)
  .get("/", userController.getAllProducts)
  .get("/:id", userController.getProduct)
  .put("/:id", userController.replaceProduct)
  .patch("/:id", userController.updateProduct)
  .delete("/:id", userController.deleteProduct);

exports.Router = Router;
