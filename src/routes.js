const express = require("express");
const ContactControler = require("./controllers/ContactControler");

const router = express();

router.get("/contacts", ContactControler.index);
router.get("/contacts/:id", ContactControler.show);
router.delete("/contacts/:id", ContactControler.delete);
router.post("/contacts", ContactControler.store);
router.put("/contacts/:id", ContactControler.update);

module.exports = router;
