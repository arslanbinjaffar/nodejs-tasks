const { Task } = require("../models/task");

exports.getTasks = async(req,res) => {
    try {
        
        const getAllTasks = await Task.find({})
        if (getAllTasks) {
            res.status(200).json({ message: "All Tasks successfully",data:getAllTasks });
       } 
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}



exports.createTask = async(req,res) => {
    try {
       
        const {name, description, isComplete } = req.body;
        if (!description || typeof isComplete === "undefined") {
            return res.status(400).json({ message: "Bad Request: Missing required fields" });
        }
        const newTask = await Task.create({
            name,
            description,
            isComplete
        })
        res.status(201).json({ message: "Task created successfully", data: newTask });
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.updateTask = async (req,res) => {
    try {
        const { id } = req.params;
        const { description, isComplete ,name} = req.body;
        if (!description || typeof isComplete === "undefined") {
            return res.status(400).json({ message: "Bad Request: Missing required fields" });
        }
        const updatedTask = await Task.findByIdAndUpdate(
        {_id:id},
            {
            name,
            description,
            isComplete
        })
            res.status(200).json({data:updatedTask, message: "Task updated successfully" });
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
exports.deleteTask = async(req,res) => {
    try {
        const { id } = req.params;
        const deletedTask = await Task.deleteOne(
        {_id:id})
            res.status(200).json({data:deletedTask, message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}