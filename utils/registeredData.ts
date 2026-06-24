import { createObjectCsvWriter } from 'csv-writer';

const csvWriter = createObjectCsvWriter({
        path: 'data/faker-users.csv',   // output file
        header: [
            { id: 'email', title: 'Email' },
            { id: 'password', title: 'Password' },
            { id: 'status', title: 'Status' }
        ],
        append: true,
    });
//let records = [];
export class RegisteredData {

    async PushRecords(email:string,pass:string){
         const records=[{
            email: email,
            password:pass,
            status:'success',// 10-char random password
          }];
          await csvWriter.writeRecords(records);
          await console.log(records);
    }
    
}