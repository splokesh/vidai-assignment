import { IsIn, IsOptional, IsPositive, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
  @IsOptional()
  @IsInt()
  @IsPositive()
  @IsIn([10, 20, 50])
  @Type(() => Number)
  limit: number = 10;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @Type(() => Number)
  page: number = 1;
}
