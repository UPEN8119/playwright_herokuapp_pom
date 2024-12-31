
exports.loginPage=class loginPage{
    constructor(page){
        this.page = page;

        this.txtUserName = page.locator("#username");
        this.txtPassword = page.locator("#password");
        this.btnLogin = page.locator(".fa-sign-in");

    }
    async navigateToApp(){
        await this.page.goto("https://the-internet.herokuapp.com/login");
    }

    async loginToHerokuApp(){
        await this.txtUserName.fill("tomsmith");
        await this.txtPassword.fill("SuperSecretPassword!");
        await this.btnLogin.click();
    }
}