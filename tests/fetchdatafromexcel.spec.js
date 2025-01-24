import { test, expect } from '@playwright/test';
import excel from "exceljs"
test('handleframe',async({})=>{

    const book = new excel.Workbook()
    await book.xlsx.readFile('./testdata/tdata.xlsx')
    const sheet = book.getWorksheet('Sheet1')
    const data = sheet.getRow(1).getCell(1).toString()
    console.log(`$$$$$$$$$$$$$$ ${data}`);
    

    
})