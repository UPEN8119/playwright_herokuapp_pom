

const {test, expect} = require('@playwright/test');
import { loginClient } from '../../Pages/rahulShettyClientAppPage';


test("Application with many products on load", async function({page}){
    const loginClientPage = new loginClient(page);
    await page.goto("https://rahulshettyacademy.com/client/");
    await loginClientPage.loginToRahulShettyClientApp();
    // await page.goto("https://rahulshettyacademy.com/client/");
    // await page.getByPlaceholder("email@example.com").fill("upen.8119@gmail.com");
    // await page.locator("[formcontrolname='userPassword']").fill("Upen@8119");
    // await page.locator("#login").click();
    // await page.waitForLoadState('networkidle');
    // const eleFirstProduct =await page.locator(".card-body b").first().textContent();
    // console.log(eleFirstProduct);
    
})