import express from "express";
const router = express.Router()

router.post('/foodData', (req,res) => {
    try {
        //console.log(global.food_items)
        res.status(200).send({food_items : global.food_items , foodCategory : global.foodCategory})  //changed to send as object
    } catch (error) {
        console.log(error.messsage)
        res.status(400).send("Server Error")
    }
})

export default router