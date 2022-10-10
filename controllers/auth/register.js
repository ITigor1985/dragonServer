const { json } = require("express");
const { Conflict } = require("http-errors");
const { User } = require("../../models");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict(`User with ${email} alredy exist`);
  }

  encryptedPassword = await bcrypt.hash(password, 10);

  const result = await User.create({
    name,
    email,
    password: encryptedPassword,
  });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        name,
      },
    },
  });
};

module.exports = register;
