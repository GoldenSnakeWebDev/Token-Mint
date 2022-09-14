module.exports = app => {
  const tokenController = require("../controllers/erc1155.controller.js");

  var router = require("express").Router();

  // Create a new Client
  router.get("/:token_id", tokenController.get);
  
  app.use("/api/erc1155", router);
};