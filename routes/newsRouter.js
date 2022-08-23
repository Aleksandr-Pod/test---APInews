const express = require("express");
const getCategories = require("../controllers/getCategories");
const getNewsByCategory = require("../controllers/getNewsByCategory");
const router = express.Router();

router.get("/categories", getCategories);
router.get("/news/:category", getNewsByCategory);
router.get("/news/:one", getNewsByCategory);

module.exports = router;
