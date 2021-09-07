import { Module } from '@nestjs/common';
import { PessoasController } from 'appcontroller/pessoas.controller';
import { PessoasService } from 'appservice/pessoas.service';

@Module({
  imports: [],
  controllers: [PessoasController],
  providers: [PessoasService],
})
export class PessoasModule {}
