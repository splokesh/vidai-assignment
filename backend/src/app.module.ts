import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsModule } from './doctors/doctors.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/doctorsdb'),
    DoctorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
