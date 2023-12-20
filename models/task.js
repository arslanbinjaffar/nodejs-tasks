const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isComplete: {
        type: Boolean,
        required: true
    }
});

exports.Task = model("tasks", taskSchema);
