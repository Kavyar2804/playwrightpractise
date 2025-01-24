// @ts-check
import { test, expect } from '@playwright/test';
import Amazonbooking from '../pageobjects/prac';
import Addtocart from '../pageobjects/newwindow';


test('searchproduct_and_addtocart', async({browser})=>{
   test.slow()
   const context = await browser.newContext()
   const page= await context.newPage()
   let amzn = new Amazonbooking(page);
   
   await amzn.gotourl('https://www.amazon.in/')
   await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
   await amzn.searchtxtfld('baby mosquito net')

  const [newpage] = await Promise.all([
   context.waitForEvent('page'),
   amzn.slctprod()
   ])
   //await expect(amzn.prodval).toContainText('Baby Mosquito Net')
   console.log(newpage)
   await newpage.waitForLoadState()
   let acart = new Addtocart(newpage)
   await expect(newpage).toHaveTitle("TurtleGrip Portable Baby Mosquito Net Anti-Bug Crib Net Bottomless Net for Infants, for Safe & Easy Use Your Baby's Safe Sleep | Size: 135 x 65 x 65cms, for (0 to 24 Months) Baby Color: Ocean Green : Amazon.in: Baby Products")
   await acart.slctprodct()
   await acart.cart()
   await expect(acart.prodvalid).toContainText('TurtleGrip Portable Baby Mosquito Net')
   await expect(acart.qtyvalid).toHaveText('8')
   await expect(acart.cartvalue).toHaveText('₹6,872.00')
   await acart.pchckout()


 

   //await amzn.selectqty.scrollIntoViewIfNeeded()
   //await expect(amzn.selectqty).toBeEnabled()
   // await page.pause()

})
