import {test,expect} from '@playwright/test';
//import * as dotenv from 'dotenv';
test('env', async({page}) => { 
    console.log('BASE_URL:', process.env.BASE_URL);
    
    await page.goto('/')
    await page.waitForTimeout(1000);    
});