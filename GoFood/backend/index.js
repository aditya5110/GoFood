import express from 'express';
const app = express()
const port = 5000
import mongoDB  from "./db.js"
mongoDB()

app.get('/' , (req,res) => {
    res.send("Hello World!")
})
app.use(express.json())
// import * from "./Routes/CreateUser.js"

import router from "./Routes/CreateUser.js"
//console.log(router)
app.use('/api' , router)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})