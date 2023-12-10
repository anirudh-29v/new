import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import{IsEmail, IsNotEmpty, MinLength} from 'class-validator'

@Schema({timestamps:true})
export class login {
    

@Prop()
loginname:string;

@Prop()
@MinLength(6)
loginpassword:string

}
export const LoginSchema=SchemaFactory.createForClass(login)