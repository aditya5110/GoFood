import mongoose from 'mongoose';

const mongoURI = "mongodb+srv://goFoodDB:goFoodDB123@cluster0.nisundv.mongodb.net/goFoodMern?retryWrites=true&w=majority"

const mongoDB = async () => {
    await mongoose.connect(mongoURI , { useNewUrlParser : true} , (err, result) => {
        if(err)console.log("Some error occured!")
        if(!err){
            console.log("connected")
            //CRUD : Read
            const fetched_data = mongoose.connection.db.collection("food_items")
            fetched_data.find({}).toArray( function(err,data){
                
                const foodCategory = mongoose.connection.db.collection("food_category")
                foodCategory.find({}).toArray(function (err,catData){
                    if(err)console.log(err)
                    else{
                        global.food_items = data
                        global.foodCategory = catData
                        //console.log(global.food_items)
                    }    
                })
                // if(err)console.log(err)
                // else{
                //     global.food_items = data
                //     //console.log(global.food_items)
                // }
            })
        }
    })
}

export default mongoDB

