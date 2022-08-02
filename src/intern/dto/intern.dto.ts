import { IsArray, IsDateString, IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class InternDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    companyName: string;

    @IsNotEmpty()
    @IsString()
    location: string;

    @IsNotEmpty()
    @IsNumberString()
    salary: number;

    @IsNotEmpty()
    @IsDateString()
    lastDate: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsArray()
    skills: string[];
}
