import { Schema, model } from "mongoose"
import { IVideo } from "../types/ivideo";

const schema: Schema = new Schema({
    title:{
        type:String,
        required:true,
        trim: true
    },
    description: {
        type:String,
        required: false
    },
    url: {
        type:String,
        required:true,
        trim:true
    }
}, {
    timestamps: true
});

export default model<IVideo>("Video", schema);
