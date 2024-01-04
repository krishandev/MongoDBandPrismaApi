import 'dotenv/config'
import express from 'express'
const app=express()
const PORT=process.env.PORT || 4000

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
import routes from './routes/index.js'
app.use(routes)

app.get("/", (req, res)=>{
    return res.send("Hey, I am working...")
})

app.listen(PORT, ()=>console.log(`The server is running on port ${PORT}`))