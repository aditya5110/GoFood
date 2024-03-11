import mongoose from 'mongoose';
const mongoURI = "mongodb+srv://goFoodDB:goFoodDB123@cluster0.nisundv.mongodb.net/?retryWrites=true&w=majority"

const mongoDB = async () => {
    await mongoose.connect(mongoURI , { useNewUrlParser : true} , (err, result) => {
        if(err)console.log("Some error occured!")
        if(!err)console.log("connected")
    })
}

export default mongoDB

