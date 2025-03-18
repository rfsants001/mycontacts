const express = require("express");
const ContactController = require("./controllers/ContactController");
const CategoryController = require("./controllers/CategoryController");

const router = express();

router.get("/contacts", ContactController.index);
router.get("/contacts/:id", ContactController.show);
router.delete("/contacts/:id", ContactController.delete);
router.post("/contacts", ContactController.store);
router.put("/contacts/:id", ContactController.update);

router.get("/categories", CategoryController.index);
router.post("/categories", CategoryController.store);

module.exports = router;
