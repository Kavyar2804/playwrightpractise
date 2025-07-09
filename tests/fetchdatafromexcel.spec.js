import { test, expect } from '@playwright/test';
import excel from "exceljs"
test('handleframe',async({})=>{

    const book = new excel.Workbook()
    await book.xlsx.readFile('./testdata/tdata.xlsx')
    const sheet = book.getWorksheet('Sheet1')
    const data = sheet.getRow(2).getCell(1).toString()
    console.log(`$$$$$$$$$$$$$$ ${data}`);
    
})

test('write data',async({})=>{

    const book = new excel.Workbook()
    await book.xlsx.readFile('./testdata/tdata.xlsx')
    const sheet = book.addWorksheet('Sheet2')
    sheet.addRow(1).getCell(1).value = 'Hello World'
    await book.xlsx.writeFile('./testdata/tdata.xlsx')

    
})