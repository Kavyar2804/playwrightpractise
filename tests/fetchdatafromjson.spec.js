import {test,expect} from "@playwright/test"
import tdata from "../testdata/data.json"


test('registerforbanking',async({page})=>{
    //test.slow()
await page.goto('https://parabank.parasoft.com/parabank/register.htm')

//await page.fill("//input[@id='customer.firstName']", 'ammu')

for(const[key,value] of Object.entries(tdata))
{
console.log(key,value);

await page.fill(`[id = "${key}"]`, value)
}
await page.locator("[value ='Register']").click()

})