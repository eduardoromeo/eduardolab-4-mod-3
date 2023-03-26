import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
    private buttonSign: string = '//*[@id="MenuContent"]/a[2]';
    private userid: string = '//*[@id="Signon"]/form/div/label[1]/input';
    private userpassword: string = '//*[@id="Signon"]/form/div/label[2]/input';
    private buttonLogin: string = '//*[@id="Signon"]/form/div/div/button';
    constructor() {
        super()
    }
    async clickButtonSing() {
        await this.driver.Page.click(this.buttonSign)
    }
    async setUserName(user: string) {
        await this.driver.Page.fill(this.userid, user)
    }
    async setPassword(pass: string) {
        await this.driver.Page.fill(this.userpassword, pass)
    }
    async clickButtonLogin() {
        await this.driver.Page.click(this.buttonLogin)
    }
}