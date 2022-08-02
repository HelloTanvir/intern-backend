import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type InternDocument = Intern & Document;

@Schema({ timestamps: true })
export class Intern {
    @Prop({ type: SchemaTypes.String, required: [true, 'Intern title is required'] })
    title: string;

    @Prop({ type: SchemaTypes.String, required: [true, 'Company name is required'] })
    companyName: string;

    @Prop({ type: SchemaTypes.String, required: [true, 'Location is required'] })
    location: string;

    @Prop({
        type: SchemaTypes.Number,
        min: [0, 'Salary must be greater than 0'],
        required: [true, 'Salary is required'],
    })
    salary: number;

    @Prop({ type: SchemaTypes.Date, required: [true, 'Last date is required'] })
    lastDate: string;

    @Prop({ type: SchemaTypes.String, required: [true, 'Description is required'] })
    description: string;

    @Prop({ type: [SchemaTypes.String], required: [true, 'skills are required'] })
    skills: string[];
}

export const InternSchema = SchemaFactory.createForClass(Intern);
