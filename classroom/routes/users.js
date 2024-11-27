const express = require("express");
const router = express.Router();

// INDEX
router.get("/", (req, res) => {
    res.send("GET for user");
});

// SHOW
router.get("/:id", (req, res) => {
    res.send("GET for user ID");
});

// POST
router.post("/", (req, res) => {
    res.send("POST for user");
});

// DELETE
router.delete("/:id", (req, res) => {
    res.send("DELETE for user ID");
});

module.exports = router;