const {test, expect} = require('@playwright/test');
import { loginPage } from '../../Pages/loginHerokuApp';

//create an object 


test('Login to herokuapp', async function({page}){
    const loginObject = new loginPage(page);
    await loginObject.navigateToApp();
    await loginObject.loginToHerokuApp();
})

test("Dropdown functionality", async function({page}){
    const loginObject = new loginPage(page);
    await page.goto("https://the-internet.herokuapp.com/dropdown")
    await loginObject.selectDropdown();
    
})
