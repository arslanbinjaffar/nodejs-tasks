const userRouter=require("./routes/user")
const taskRouter = require("./routes/task")
const {ConnectToMONGODB}=require("./db")
const dotenv = require("dotenv")
const express = require("express")
dotenv.config()
const cors = require("cors")
const app = express()
app.use(cors({ origin: "*" }))
app.use(express.json())

app.use('/tasks', taskRouter);
app.use('/user',userRouter)
const port=process.env.PORT || 3000
ConnectToMONGODB()
app.listen(port, () => {
    console.log(`https://localhost:${port}`)
})