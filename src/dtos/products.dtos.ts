import { IsNotEmpty, IsString, IsNumber, IsUrl, IsPositive } from 'class-validator';
import { PartialType, OmitType } from '@nestjs/mapped-types';
export class CreateProductDto {
  
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly price: number;
  
  @IsNotEmpty()
  @IsUrl()
  readonly image: string;

  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}