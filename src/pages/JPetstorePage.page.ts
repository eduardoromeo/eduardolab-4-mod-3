import { BasePage } from "./base.page";

class JPetstorePage extends BasePage {
    private buttonFish = '//div[@id='QuickLinks']/a'
    private buttonSelectFish ='//div[@id='Catalog']/table/tbody/tr[2]/td/a'
    private buttonAddCardFish = '//div[@id='Catalog']/table/tbody/tr[2]/td[5]/a'
    private buttonReturntoMainMenu = '//a[contains(text(),'Return to Main Menu')]'

    constructor() {
        super()
    }
    async selectItem(idItem: number) {
        let selectorItem = '//div[@id='Catalog']/table/tbody/tr[2]/td/a'
        console.log(selectorItem)
        await this.driver.Page.click(selectorItem)
    }
    async clickButtonCart() {
        await this.driver.Page.click(this.buttonFish);
    }
    async clickButtonAddCart() {
        await this.driver.Page.click(this.buttonAddCardFish);
    }
    async clickReturnToMainMenu() {
        await this.driver.Page.click(this.buttonReturntoMainMenu)
    }

}
export const jpetstore = new JPetstorePage();