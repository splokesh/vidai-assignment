import { IsOptional, IsString, IsArray } from 'class-validator';
import { Transform } from 'class-transformer';

export class DoctorFilterDto {
  @IsOptional()
  @IsString()
  @Transform(({ value }) => value || '')
  searchKeyword: string = '';

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @Transform(({ value }) => {
    console.log(value, '<<<');
    if (Array.isArray(value)) return value;
    if (typeof value === 'string')
      return value.split(',').map((item) => item.trim());
    return [];
  })
  specialty: string[] = [];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @Transform(({ value }) => {
    if (Array.isArray(value)) return value;
    if (typeof value === 'string')
      return value.split(',').map((item) => item.trim());
    return [];
  })
  location: string[] = [];
}
