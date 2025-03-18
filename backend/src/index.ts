import express from "express"
import cors from "cors"
import dotenv from "dotenv" 
import mongoose from "mongoose"
import chatRoute from "./routes/chat"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI || ""

// db connection 
mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB Atlas Cluster'))
    .catch(err => console.log('Error connecting to MongoDB:', err));


app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello AI WORD!')
})
app.use("/chat", chatRoute)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))