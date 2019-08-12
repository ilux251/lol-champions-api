import { Schema, model } from 'mongoose';

const ChampionSchema = new Schema({
    name: String,
    icon: String
});

export default model("champion", ChampionSchema);