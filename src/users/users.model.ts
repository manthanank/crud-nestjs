import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

export interface User extends mongoose.Document {
  id: string;
  firstName: string;
  lastName: string;
}
