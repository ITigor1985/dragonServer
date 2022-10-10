const { Dragon } = require("../../models");

const getAll = async (req, res) => {
  const { _id } = req.user;
  const dr = await Dragon.find({ owner: _id });
  res.json({
    status: "success",
    code: 200,
    data: dr,
  });
};

module.exports = getAll;
