import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class PaginationParamsDto {
  @ApiPropertyOptional({
    description: '页面大小ta数量',
    example: 10,
    default: 1,
    type: 'number',
    minimum: 1,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Min(1)
  @Transform(({ value }) => parseInt(value, 10))
  pageSize = 10;

  @ApiPropertyOptional({
    description: '页码',
    example: 1,
    default: 1,
    type: 'number',
    minimum: 1,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Transform(({ value }) => parseInt(value, 10))
  page?: number = 1;

  // @IsOptional()
  // @IsNumber()
  // @Min(1)
  // limit?: number = 10;
}
