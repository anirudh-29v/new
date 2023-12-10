import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BbankService } from './bbank.service';
import { bank } from './bbank.schema';
import { donar } from './donar.schema';

@Controller('bbank')
export class BbankController {

    constructor(private bankService: BbankService) {

    }
    @Get()
    async getAlldata(): Promise<bank[]> {
        return this.bankService.findAll()
    }
    @Post('data')
    async getBanks(@Body() Body) {
        console.log('body', Body)
        const data = this.bankService.create({
            username: Body.Username,
            emailID: Body.emailID,
            Password: Body.password
        });
        return {
            success: true,
            data
        }
    }

    @Post('login')
    async logindata(@Body() body) {
        console.log(body," login body")
        const value = this.bankService.login({loginname:body.loginname, loginpassword:body.loginpassword });
        return value
    }

    @Post('patient')
    async patientdata(@Body() body){
    const pdata=this.bankService.patient({Pusername:body.Pusername,PLastname:body.PLastname,Page:body.Page,PPhonenumber:body.PPhonenumber,Punits:body.Punits,Pgender:body.Pgender,Pbloodgroup:body.Pbloodgroup});
    return {
        success: true,
        pdata
    }
    }

    @Post('donar')
    async donardata(@Body() body) {
        console.log('entered post',body)
        const ddata = this.bankService.donar({ username:body.username, Lastname:body.Lastname, age:body.age, Phonenumber: body.Phonenumber, units: body.units, gender: body.gender, bloodgroup: body.bloodgroup });
   
         return  ddata
    
    }

    @Get('getdonar')
    async getDonar(): Promise<donar[]> {
        return this.bankService.findDonar();
    }
    
    @Get('getpatient')
    async findPatient() {
        return this.bankService.getPatient();
    }

}
