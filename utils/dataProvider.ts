import fs from 'fs';
import {parse} from 'csv-parse/sync';
export class DataProvider{
    static getDatafromJSON(filePath:string){
        return (JSON.parse(fs.readFileSync(filePath,'utf8')));

    }
    static getDatafromcsv(filePath:string){
        return (parse(fs.readFileSync(filePath),{columns:true,skip_empty_lines:true}));
    }
}