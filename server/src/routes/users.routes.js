const router = require("express").Router();
const { findMany, findOne, deleteMany, deleteOne, updateMay, updateOne, insertMay, insertOne } = require("../controllers/users.controllers");

router.get("/", findMany);
router.get("/:id", findOne);
router.post("/", insertOne);
router.delete("/:id", deleteOne);

module.exports = router;
