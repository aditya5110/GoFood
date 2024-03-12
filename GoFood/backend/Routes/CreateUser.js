import express from "express";
//import { Router } from "express";
import User from "../models/User.js";
import { body, validationResult } from "express-validator";

const router = express.Router()

router.post("/createuser",[ 
    body('email').isEmail(),
    body('name').isLength({min : 2}),
    body('password' , 'length less than 5').isLength({min : 5})]
    ,async (req,res) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors : errors.array()})
        }
        try {
            await User.create({
                name : req.body.name,
                password : req.body.password,
                email: req.body.email,
                location : req.body.location
            })
            .then(res.json({success : true}))
        } catch(error) {
            console.log(error)
            res.json({success : false})
        }
    } 
) 

router.post("/loginuser",[ 
    body('email').isEmail(),
    body('name').isLength({min : 2}),
    body('password' , 'length less than 5').isLength({min : 5})], 
    async (req,res) =>{
        let email = req.body.email
        try {
            let userData = await User.findOne({email})
            if(!userData){
                return res.status(400).json({errors : "Incorrect Credentials"})
            }

            if(!(req.body.password === userData.password)){
                return res.status(400).json({errors : "Incorrect Credentials"})
            }

            return res.json({success : true})
        } catch(error) {
            console.log(error)
            res.json({success : false})
        }
    } 
) 

export default router