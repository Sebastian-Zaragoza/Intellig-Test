import mongoose, {Document, Schema} from "mongoose";
import {Types} from "mongoose";

export interface IToken extends Document {
    token: string,
    user: Types.ObjectId,
    createAt: Date
}

export const TokenSchema = new Schema({
    token:{
        type: String,
        required: true
    },
    user:{
        type: Types.ObjectId,
        ref: "User",
    },
    createAt: {
        type: Date,
        default: Date.now(),
        expires: '10m'
    }
})
export const Token = mongoose.model<IToken>("Token", TokenSchema)
export default Token