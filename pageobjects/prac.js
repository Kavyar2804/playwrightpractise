import {expect, Page} from "@playwright/test"

class Amazonbooking
{
    /**
     *  @param{Page}page    //autosuggestion
     */

    constructor(page)
    {
        this.page=page
        this.srchtxtfld=page.getByRole('searchbox')
        this.srchbtn=page.locator('#nav-search-submit-button')
        this.portablenet=page.getByLabel('Portable Nets')
        this.selectproduct=page.getByAltText("TurtleGrip Portable Baby Mosquito Net Anti-Bug Crib Net Bottomless Net for Infants, for Safe & Easy Use Your Baby's Safe S...")
        this.prodval=page.locator("span[id='productTitle']")
    }
    
    async gotourl(url)
    {
        await this.page.goto(url)
    }

    async searchtxtfld(text)
    {
        await this.srchtxtfld.fill(text)
        await this.portablenet.click()
    }
    async slctprod()
    {
        await this.selectproduct.click()
    }

}

export default Amazonbooking;

//span[@class="a-dropdown-label"]/../following-sibling::i