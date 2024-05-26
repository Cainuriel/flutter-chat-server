const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  online: {
    type: Boolean,
    default: false,
  },
});

UserSchema.method("toJSON", function () {
  // {
  //   "_id": {
  //     "$oid": "121212121212"
  //   },
  //   "name": "Alice",
  //   "email": "alice@alice.com",
  //   "password": "$2a$10$2642724572457245745724572472472475.",
  //   "online": false,
  //   "__v": 0
  // }

  const { __v, _id, password, ...object } = this.toObject();

  // __v = 0
  // _id = ObjectID("121212121212"},
  // password = "$2a$10$Z6HK45SxUkuC2F2KYJ6qXeF7f0Y5Dwv9GvJQgN0lJAAfbJJ0FOhI.",
  // object = {name: "alice", email: "alice@alice.com" , "online": false, }}

  object.uid = _id;

  // object = {name: "alice", email: "alice@alice.com" , "online": false, uid: "66525150ecd088de6270040c"}

  return object;
});

module.exports = model("User", UserSchema);
