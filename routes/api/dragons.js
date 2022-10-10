const express = require("express");
const { ctrlWrapper, auth } = require("../../middlewares");
const { dragons: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/favorites", auth, ctrlWrapper(ctrl.getAll));

router.post("/add", auth, ctrl.add);

router.delete("/remove/:dragonId", ctrlWrapper(ctrl.removeById));

module.exports = router;
