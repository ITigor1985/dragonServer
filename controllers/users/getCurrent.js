const getCurrent = async (req, res) => {
  const { email, name } = req.user;
  res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        name,
        email,
      },
    },
  });
};

module.exports = getCurrent;
