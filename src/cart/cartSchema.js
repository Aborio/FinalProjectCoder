import { Schema } from "mongoose";

export const CartSchema = new Schema(
    {
        id : {type: String, required: true, unique: true},
        productos : {_id:false, type: Array, default:[]}
    }
)