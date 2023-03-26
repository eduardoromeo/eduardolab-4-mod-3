import { BasePage } from "./base.page";

class JPetstorePage extends BasePage {
    private buttonFish = '//*[@id="QuickLinks"]/a[1]'
    private buttonSelectFish ='//*[@id="Catalog"]/table/tbody/tr[2]/td[1]/a'
    private buttonAddCardFish = '//*[@id="Catalog"]/table/tbody/tr[2]/td[5]/a'
    private buttonReturntoMainMenu = '//*[@id="BackLink"]/a'

    constructor() {
        super()
    }
    async selectItem(idItem: number) {
        let selectorItem = '//*[@id="Catalog"]/table/tbody/tr[2]/td[1]/a'
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