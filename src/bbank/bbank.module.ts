import { Module } from '@nestjs/common';
import { BbankController } from './bbank.controller';
import { BbankService } from './bbank.service';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { BbankSchema } from './bbank.schema';
import { LoginSchema } from './login.schema';
import { DonarSchema } from './donar.schema';
import { patientSchema } from './patient.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {name:'bank',schema:BbankSchema},
    {name:'login',schema:LoginSchema},
    {name:'donar',schema:DonarSchema},
    {name:'patient',schema:patientSchema}])
],
  controllers: [BbankController],
  providers: [BbankService]
})
export class BbankModule {}
