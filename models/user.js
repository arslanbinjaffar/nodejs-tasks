const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required:true
    },
    verified: {
        type: String,
        required:true
    },

});

exports.User = model("users", userSchema);
