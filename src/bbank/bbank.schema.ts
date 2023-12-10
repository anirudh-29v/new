import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class bank {

 @Prop()
username:string;

@Prop()
emailID:string;

@Prop()
Password:string
}
export const BbankSchema=SchemaFactory.createForClass(bank)