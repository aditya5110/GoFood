import express from 'express';
const app = express()
const port = 5000
import mongoDB  from "./db.js"
mongoDB()

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Headers" , "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.get('/' , (req,res) => {
    res.send("Hello World!")
})
app.use(express.json())

import router1 from "./Routes/CreateUser.js"
app.use('/api' , router1)

import router2 from './Routes/DisplayData.js'
app.use('/api', router2)


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})