import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BbankModule } from './bbank/bbank.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
  //   ConfigModule.forRoot({envFilePath:'.env',
  // isGlobal:true}),
  // MongooseModule.forRoot('mongodb://127.0.0.1:27017'),
   MongooseModule.forRoot('mongodb://127.0.0.1:27017',{dbName:'admin'}),
    BbankModule
  ],
  controllers: [AppController],
  providers: [AppService, 
],
})
export class AppModule {
  // constructor() {
  //   const connection = MongooseModule.getConnection(); // Get the Mongoose connection instance
    
  //   connection.on('open', () => {
  //     console.log('Connected to MongoDB database');
  //   });
    
  //   connection.on('error', (error) => {
  //     console.error('Failed to connect to MongoDB database:', error);
  //   });
  // }
}
