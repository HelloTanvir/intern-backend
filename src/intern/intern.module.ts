import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InternController } from './intern.controller';
import { InternService } from './intern.service';
import { Intern, InternSchema } from './schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Intern.name, schema: InternSchema }])],
    controllers: [InternController],
    providers: [InternService],
})
export class InternModule {}
