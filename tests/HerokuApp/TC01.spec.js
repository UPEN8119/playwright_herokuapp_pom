const {test, expect} = require('@playwright/test');
import { log } from 'console';
import { loginPage } from '../../Pages/login';


test('Login to herokuapp', async function({page}){
    //create an object 
    const loginObject = new loginPage(page);
    await loginObject.navigateToApp();
    await loginObject.loginToHerokuApp();
})
