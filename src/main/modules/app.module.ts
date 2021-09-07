import { Module } from '@nestjs/common';
import { AppController } from 'appcontroller/app.controller';
import { AppService } from 'appservice/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
