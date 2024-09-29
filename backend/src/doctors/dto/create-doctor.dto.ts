import { IsString, IsNumber, IsEmail, Min, Max } from 'class-validator';

export class CreateDoctorDto {
  @IsString()
  name: string;

  @IsString()
  specialty: string;

  @IsString()
  location: string;

  @IsNumber()
  @Min(0)
  @Max(5)
  rating: number;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;
}
