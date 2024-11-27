const express = require("express");
const router = express.Router();

//posts

// INDEX
router.get("/", (req, res) => {
    res.send("GET for post");
});

// SHOW
router.get("/:id", (req, res) => {
    res.send("GET for post ID");
});

// POST
router.post("/", (req, res) => {
    res.send("POST for post");
});

// DELETE
router.delete("/:id", (req, res) => {
    res.send("DELETE for post ID");
});

module.exports = router;