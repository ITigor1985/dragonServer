const { NotFound } = require("http-errors");
const { Dragon } = require("../../models");

const removeById = async (req, res) => {
  const { dragonId } = req.params;
  const result = await Dragon.findByIdAndRemove(dragonId);
  if (!result) {
    throw new NotFound("Not found");
  }
  res.json({
    status: "success",
    message: "dragon deleted",
    code: 200,
    data: { result },
  });
};
module.exports = removeById;
