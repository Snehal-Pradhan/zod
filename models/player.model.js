import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/playerdatabase");

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 0
    }
});


export const Player = mongoose.model("Player", playerSchema);