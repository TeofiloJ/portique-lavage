import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: Number,
  prenom: String,
  nom: String,
  autre: String
});