import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorsService {
  constructor(@InjectModel('Doctor') private doctorModel: Model<Doctor>) {}

  async create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
    const createdDoctor = new this.doctorModel(createDoctorDto);
    return createdDoctor.save();
  }

  async findAll(): Promise<Doctor[]> {
    return this.doctorModel.find().exec();
  }

  async findOne(id: string): Promise<Doctor> {
    return this.doctorModel.findById(id).exec();
  }

  async update(id: string, updateDoctorDto: UpdateDoctorDto): Promise<Doctor> {
    return this.doctorModel
      .findByIdAndUpdate(id, updateDoctorDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Doctor> {
    return this.doctorModel.findByIdAndDelete(id).exec();
  }
}
