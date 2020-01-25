import { Schema, Document } from 'mongoose';

export const ExercisesSchema = new Schema({
    name: String,
    sets: Number,
    repetitions: Number,
});

export interface Exercise extends Document {
    id: string;
    name: string;
    sets: number;
    repetitions: number;
}
