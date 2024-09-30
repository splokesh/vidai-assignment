import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor } from './entities/doctor.entity';
import { PaginationDto } from '../common/dto/pagination.dto';
import { DoctorFilterDto } from './dto/doctor-filter.dto';

@Injectable()
export class DoctorsService {
  constructor(@InjectModel('Doctor') private doctorModel: Model<Doctor>) {}

  private escapeRegex(text: string): string {
    return text ? text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') : '';
  }

  async create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
    const createdDoctor = new this.doctorModel(createDoctorDto);
    return createdDoctor.save();
  }

  async findAll(paginationDto: PaginationDto, filterDto: DoctorFilterDto) {
    const { limit, page } = paginationDto;
    const { searchKeyword, specialty, location } = filterDto;

    console.log({ searchKeyword, specialty, location, limit, page });

    const sanitizedSearchKeyword = this.escapeRegex(searchKeyword);

    const matchStage = {
      $match: {
        ...(sanitizedSearchKeyword && {
          name: { $regex: sanitizedSearchKeyword, $options: 'i' },
        }),
        ...(specialty.length > 0 && {
          specialization: { $in: specialty },
        }),
        ...(location.length > 0 && { location: { $in: location } }),
      },
    };

    const [result] = await this.doctorModel.aggregate([
      matchStage,
      {
        $facet: {
          doctors: [{ $skip: (page - 1) * limit }, { $limit: limit }],
          totalCount: [{ $count: 'count' }],
        },
      },
      {
        $project: {
          doctors: 1,
          totalCount: { $arrayElemAt: ['$totalCount.count', 0] },
        },
      },
    ]);

    const { doctors, totalCount } = result;

    return {
      doctors,
      totalCount: totalCount || 0,
      page,
      limit,
      totalPages: Math.ceil((totalCount || 0) / limit),
    };
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
