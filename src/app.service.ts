import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';

@Injectable()
export class AppService {
  constructor(){
    // mongoose.createConnection('mongodb://localhost/admin', {})
    // console.log("in constructor", process.env.DB_URI)
  }
  getHello(): string {
    return 'Hello World!';
  }
}
