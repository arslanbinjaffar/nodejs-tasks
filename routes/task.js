const {Router}=require("express")
const { createTask,deleteTask,getTasks,updateTask } = require("../controllers/task")

const router = Router()


router.get("/getTasks", getTasks)
router.post("/createTask", createTask)
router.put("/updateTask/:id", updateTask)
router.delete("/deleteTask/:id", deleteTask)



module.exports=router