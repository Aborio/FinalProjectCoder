import mongoose, { Schema } from "mongoose";


export const userSchema = new Schema({
     id : {type: String, required: true},
     email: {type:String, required:true},
     name: {type:String, required:true},
     password: {type:String, required: true},
     admin : {type: Boolean, required: true},
     image: {type : String, required:true},
     // cart: [cartSchema]
 })



  

