import { driverInstance } from "../src/core/driver";
import { LoginPage } from "../src/pages/login.page";
import { jpetstore } from "../src/pages/JPetstorePage.page";

import { configPage } from "../userData";


describe("Test select Fish", () => {
    let loginPage: LoginPage;

    beforeAll(async () => {
        await driverInstance.startDriver()
        loginPage = new LoginPage()

        await loginPage.navigateTo(configPage.linkPage)
        await loginPage.setUserName(configPage.userName)
        await loginPage.clickButtonLogin()

    }, 30000)
    afterAll(async () => {
        await driverInstance.closeDriver()
    })
    it('Go to the page shopping', async () => {
        await loginPage.clickButtonSing()
    }, 20000)
    it('Add item to the chart', async () => {
        await jpetstore.clickButtonCart
    }, 10000)
    it('Add item 40 to the chart', async () => {
        await jpetstore.clickButtonAddCart
    }, 10000)
})