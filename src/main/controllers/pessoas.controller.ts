import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Response,
} from '@nestjs/common';
import { PessoasService } from 'appservice/pessoas.service';
import Pessoa from 'appmodel/pessoa.model';
import Page from 'appmodel/page.model';

@Controller('api/pessoas')
export class PessoasController {
  constructor(private readonly service: PessoasService) {}

  @Get()
  listAll(@Query('page') page = 0, @Query('size') size = 10): Page<Pessoa> {
    return this.service.listPessoas(page, size);
  }

  @Post()
  addPessoa(@Body() pessoa: Pessoa, @Response() response): void {
    pessoa = this.service.addPessoaObject(pessoa);
    response
      .header('Location', `/api/pessoas/${pessoa.id}`)
      .status(HttpStatus.CREATED)
      .send();
  }

  @Get(':id')
  getPessoa(@Param('id') id: number): Pessoa {
    return this.service.getPessoa(id);
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Put(':id')
  updatePessoa(@Param('id') id: number, @Body() pessoa: Pessoa): void {
    this.service.updatePessoa(id, pessoa);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  removePessoa(@Param('id') id: number): void {
    this.service.removePessoa(id);
  }
}
