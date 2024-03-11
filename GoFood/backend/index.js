import express from 'express';
const app = express()
const port = 5000
import mongoDB  from "./db.js"
mongoDB()

app.get('/' , (req,res) => {
    res.send("Hello Wrld!")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})