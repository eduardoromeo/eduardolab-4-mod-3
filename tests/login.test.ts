import { driverInstance } from "../src/core/driver";
import { LoginPage } from "../src/pages/login.page"

describe.skip('Login from TestingShop', () => {
    let loginPage: LoginPage
    beforeAll(async () => {

        await driverInstance.startDriver()
        loginPage = new LoginPage();
    })
    afterAll(async () => {

    })
    it('Go To Page', async () => {
        await loginPage.navigateTo('https://jpetstore.aspectran.com/account/signonForm');
    });

    it('Sets Username', async () => {
        await loginPage.setUserName('j2ee');
    });

    it('Sets Password', async () => {
        await loginPage.setPassword('123');
    });
    it('Clicks login Button', async () => {
        await loginPage.clickButtonLogin();
    });
})