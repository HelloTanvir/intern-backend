import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InternDto, InternUpdateDto } from './dto';
import { Intern, InternDocument } from './schema';

@Injectable()
export class InternService {
    constructor(@InjectModel(Intern.name) private readonly internModel: Model<InternDocument>) {}

    async create(dto: InternDto): Promise<Intern> {
        const intern = await this.internModel.findOne({ name: dto.name });
        if (intern) {
            throw new ForbiddenException('intern already exists');
        }

        const newIntern = new this.internModel(dto);
        await newIntern.save();

        return newIntern;
    }

    async findAll(): Promise<Intern[]> {
        return await this.internModel.find();
    }

    async findOne(id: string | number): Promise<Intern> {
        return await this.internModel.findById(id);
    }

    async update(id: string | number, dto: InternUpdateDto): Promise<Intern> {
        const intern = await this.internModel.findById(id);
        if (!intern) {
            throw new ForbiddenException('intern does not exist');
        }

        return await this.internModel.findByIdAndUpdate(id, dto, { new: true });
    }

    async delete(id: string | number): Promise<Intern> {
        const intern = await this.internModel.findById(id);
        if (!intern) {
            throw new ForbiddenException('intern does not exist');
        }

        await intern.remove();

        return intern;
    }
}
