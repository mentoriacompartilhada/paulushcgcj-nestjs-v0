import { Module } from '@nestjs/common';
import { AppModule } from 'appmodule/app.module';
import { PessoasModule } from 'appmodule/pessoas.module';

@Module({
  imports: [AppModule, PessoasModule],
})
export class MainModule {}
