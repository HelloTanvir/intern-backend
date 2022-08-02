import {
    IsArray,
    IsDateString,
    IsNotEmpty,
    IsNumberString,
    IsOptional,
    // eslint-disable-next-line prettier/prettier
    IsString
} from 'class-validator';

export class InternUpdateDto {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    companyName: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    location: string;

    @IsOptional()
    @IsNotEmpty()
    @IsNumberString()
    salary: number;

    @IsOptional()
    @IsNotEmpty()
    @IsDateString()
    lastDate: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    description: string;

    @IsOptional()
    @IsNotEmpty()
    @IsArray()
    skills: string[];
}
