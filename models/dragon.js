const { Schema, model } = require("mongoose");

const dragonSchema = Schema(
  {
    name: {
      type: String,
    },
    number: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const Dragon = model("dragon", dragonSchema);

module.exports = {
  Dragon,
};
