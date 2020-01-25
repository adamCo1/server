import { Schema, Document } from 'mongoose';
import {Exercise} from './exercises.model';

export const ProgramsSchema = new Schema({
    name: String,
    exercises: [],
});

export interface Programs extends Document {
    id?: string;
    name: string;
    exercises: Exercise[];
}
