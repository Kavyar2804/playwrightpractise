import { test , expect } from "@playwright/test"

class Addtocart
{
    /**
     * @param{Page}page
     */
    constructor(page)
    {
        this.page=page
        this.selectqty=page.locator('#selectQuantity')
        this.quantity=page.locator("//ul[@role='listbox']/li/a[@id='quantity_7']")
        this.giftopt=page.locator("[id='gift-wrap']")
        this.addtocart=page.locator("//input[@id='add-to-cart-button']")
        this.gotocart=page.locator("//a[@href='/cart?ref_=sw_gtc']")
        this.gift=page.locator("[id=sc-buy-box-gift-checkbox]")
        this.chckout=page.locator("[name=proceedToRetailCheckout]")
        this.prodvalid=page.locator("[class='a-truncate-full']")
        this.qtyvalid=page.locator("//div[@role='spinbutton']/span[@data-a-selector='value']")
        this.cartvalue=page.locator("span[class='a-size-medium a-color-base sc-price sc-white-space-nowrap']").first()
    }

    async slctprodct()
    {
        await this.selectqty.click()
        await this.quantity.click()
        await this.giftopt.check()
     }
    async cart()
    {
        await this.addtocart.click()
        await this.gotocart.click()
        await this.gift.check()
    }

    async pchckout()
    {
        await this.chckout.click()
    }
}

export default Addtocart
//.getByRole('listbox').getByRole('option').locator('a[@id="quantity_6"]')
//getByPlaceholder('Add gift options')