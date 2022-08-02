import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class InternDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsNotEmpty()
    @IsArray()
    subCategories: string[];
}
