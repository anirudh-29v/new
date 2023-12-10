import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNotEmpty } from "class-validator";

@Schema({timestamps:true})
export class donar {

 @Prop()
username:string

@Prop()
Lastname:string

@Prop()
gender:string

@Prop()
age:number


@Prop()
units:number


@Prop()
Phonenumber:string

@Prop()
bloodgroup:string
}
export const DonarSchema=SchemaFactory.createForClass(donar)