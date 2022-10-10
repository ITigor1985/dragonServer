const { Dragon } = require("../../models");

const add = async (req, res) => {
  const { _id } = req.user;
  console.log(req.body);
  const result = await Dragon.create({ ...req.body, owner: _id });
  console.log(result);
  res.status(201).json({
    status: "success",
    code: 201,
    data: { result },
  });
};

module.exports = add;
