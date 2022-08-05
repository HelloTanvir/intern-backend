import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { Public } from '../common/decorators';
import { InternDto, InternUpdateDto } from './dto';
import { InternService } from './intern.service';
import { Intern } from './schema';

@Controller('offers')
export class InternController {
    constructor(private internService: InternService) {}

    @Public()
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto: InternDto): Promise<Intern> {
        return this.internService.create(dto);
    }

    @Public()
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Intern[]> {
        return this.internService.findAll();
    }

    @Public()
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findOne(@Param('id') id: string | number): Promise<Intern> {
        return this.internService.findOne(id);
    }

    @Public()
    @Post('/:id')
    @HttpCode(HttpStatus.OK)
    update(@Param('id') id: string | number, @Body() dto: InternUpdateDto): Promise<Intern> {
        return this.internService.update(id, dto);
    }

    @Public()
    @Delete('/:id')
    @HttpCode(HttpStatus.OK)
    delete(@Param('id') id: string | number): Promise<Intern> {
        return this.internService.delete(id);
    }
}
