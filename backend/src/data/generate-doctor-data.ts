import { faker } from '@faker-js/faker';
import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

interface Doctor {
  //   id: number;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  phone: string;
  email: string;
}

function generateDoctorData(count: number): Doctor[] {
  const doctors: Doctor[] = [];

  for (let i = 0; i < count; i++) {
    const doctor: Doctor = {
      //   id: i + 1,
      name: 'Dr. ' + faker.person.fullName(),
      specialty: faker.helpers.arrayElement([
        'Cardiology',
        'Neurology',
        'Pediatrics',
        'Orthopedics',
        'Dermatology',
        'Oncology',
        'Gynecology',
        'Psychiatry',
      ]),
      location: `${faker.location.city()}, ${faker.location.state({ abbreviated: true })}`,
      rating: parseFloat(
        faker.number.float({ min: 3.5, max: 5, multipleOf: 0.02 }).toFixed(1),
      ),
      phone: faker.phone.number({ style: 'international' }),
      email: faker.internet.email(),
    };
    doctors.push(doctor);
  }

  return doctors;
}

async function seedDoctorsToMongoDB(doctors: Doctor[]) {
  const uri = process.env.MONGO_URL + '/' + process.env.MONGO_DB_NAME; // Replace with your MongoDB connection string
  console.log(uri);
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db(process.env.MONGO_DB_NAME); // Replace with your database name
    const collection = database.collection('doctors');

    const result = await collection.insertMany(doctors);
    console.log(`${result.insertedCount} doctors seeded to MongoDB`);
  } catch (error) {
    console.error('Error seeding doctors to MongoDB:', error);
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
}

// Generate 10 doctor records
const generatedDoctors = generateDoctorData(100);

// Seed the generated doctors to MongoDB
seedDoctorsToMongoDB(generatedDoctors)
  .then(() => console.log('Seeding process completed'))
  .catch((error) => console.error('Seeding process failed:', error));
