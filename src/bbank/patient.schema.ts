import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class patient {

 @Prop()
Pusername:string;
@Prop()
PLastname:string;
@Prop()
Pgender:string
@Prop()
Page:number
@Prop()
Punits:number
@Prop()
PPhonenumber:string
@Prop()
Pbloodgroup:string
}
export const patientSchema=SchemaFactory.createForClass(patient)