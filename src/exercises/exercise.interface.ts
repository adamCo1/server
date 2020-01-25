import { Document } from 'mongoose';

export interface IExercise {
    id?: string;
    name: string;
    sets: number;
    repetitions: number;
}
