import * as mongoose from 'mongoose';

export const DoctorSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  location: String,
  rating: Number,
  phone: String,
  email: String,
});
