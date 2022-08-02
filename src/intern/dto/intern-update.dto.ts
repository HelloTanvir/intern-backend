import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class InternUpdateDto {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsNotEmpty()
    @IsArray()
    subCategories: string[];
}
