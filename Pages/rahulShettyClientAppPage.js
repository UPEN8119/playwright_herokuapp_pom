

exports.loginClient= class loginClient{
    constructor(page){
        this.page =page;
        this.txtUserName= page.getByPlaceholder("email@example.com");
        this.txtPassword= page.locator("[formcontrolname='userPassword']");
        this.btnLoginClient= page.locator("#login");
    }
    async loginToRahulShettyClientApp(){
        
        await this.txtUserName.fill("upen.8119@gmail.com");
        await this.txtPassword.fill("Upen@8119");
        await this.btnLoginClient.click();
        await this.page.locator(".card-body b").first().waitFor();
        const allProducts = await this.page.locator(".card-body b").allTextContents();
        console.log(allProducts);
    }
}