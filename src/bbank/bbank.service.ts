import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { bank } from './bbank.schema';
import * as mongoose from 'mongoose';
import { login } from './login.schema';
import { donar } from './donar.schema';
import { patient } from './patient.schema';

@Injectable()
export class BbankService {
    constructor(
        @InjectModel(bank.name)
        private bankModel: mongoose.Model<bank>,
        @InjectModel(login.name) private loginModel: mongoose.Model<login>,
        @InjectModel(donar.name) private donarModel: mongoose.Model<donar>,
        @InjectModel(patient.name) private patientModel: mongoose.Model<patient>) { }


    async findAll(): Promise<bank[]> {
        const banks = await this.bankModel.find()
        return banks
    }

    async create(banks: bank): Promise<bank> {
        const data = await this.bankModel.create(banks)
        return data
    }
    async findById(id: string): Promise<bank> {
        const res = await this.bankModel.findById(id)
        return res
    }
    async login(logins: login) {
        const val = await this.loginModel.create(logins)
        return val
    }
    async donar(donation: donar): Promise<donar> {
        const donations = await this.donarModel.create(donation)
        return donations
    }
    async findDonar(): Promise<donar[]> {
        const donardata = await this.donarModel.find()
        return donardata
       
    }
    async patient(patients: patient): Promise<patient> {
        const req = await this.patientModel.create(patients)
        return req
    }

    async getPatient() :Promise<patient[]>{
        const Preq = await this.patientModel.find()
        return Preq
    }
}
