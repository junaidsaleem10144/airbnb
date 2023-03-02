const mongoose = require("mongoose");
const { Schema } = mongoose; // agr yr nhi likho gy phir mongoose.Schema likhna hoga

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
