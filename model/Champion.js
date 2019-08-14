import { Schema, model } from 'mongoose';

const ChampionSchema = new Schema({
    name: { type: String, index: true, unique: true, required: true },
    icon: { type: String }
});

export default model("champion", ChampionSchema);