const fs = require("fs");
const model = require("../model/product");
const Product = model.Product;
// const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;

// exports.createProduct = (req, res) => {
//   console.log(req.body);
//   products.push(req.body);
//   res.status(201).json(req.body);
// };

// CREATE THE PRODUCT
exports.createProduct = (req, res) => {
  console.log("create product called");
  const product = new Product(req.body);
  const saveToData = async () => {
    await product.save();
    // if (err) {
    //   res.status(400).json(req.body);
    // }
    res.status(201).json(req.body);
  };
  saveToData();
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.json(product);
};

exports.replaceProduct = async (req, res) => {
  const id = req.params.id;

  const doc = await Product.findOneAndReplace({ _id: id }, req.body, {
    new: true,
  });
  res.status(201).json(doc);
  res.json({ type: "PUT" });
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  // const productIndex = products.findIndex((p) => p.id === id);
  // let product = products[productIndex];
  // products.splice(productIndex, 1, { ...product, ...req.body });

  const doc = await Product.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  res.status(201).json(doc);
  res.status(201).json();
};
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  // const productIndex = products.findIndex((p) => p.id === id);
  // let product = products[productIndex];
  // products.splice(productIndex, 1);
  // res.status(201).json(product);

  const doc = await Product.findOneAndDelete({ _id: id });
  res.status(201).json(doc);
};

// 3eTrFMmRAM80fch9

//
