import { ObjectId } from 'mongodb';

export class Doctor {
  _id: ObjectId;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  phone: string;
  email: string;
}
