const express = require("express");
const ContactControler = require("./controllers/ContactControler");

const router = express();

router.get("/contacts", ContactControler.index);

module.exports = router;
