import { Module } from '@nestjs/common';

//Controllers
import { AppController } from 'appcontroller/app.controller';
import { PessoasController } from 'appcontroller/pessoas.controller';

//Services
import { AppService } from 'appservice/app.service';
import { PessoasService } from 'appservice/pessoas.service';

@Module({
  imports: [],
  controllers: [AppController, PessoasController],
  providers: [AppService, PessoasService],
})
export class AppModule {}
