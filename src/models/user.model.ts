import { Schema, Document } from 'mongoose';

export const UsersSchema = new Schema({
   firstName: String,
   lastName: String,
});

export interface User extends Document {
   id: string;
   firstName: string;
   lastName: string;
}
