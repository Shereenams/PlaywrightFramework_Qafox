import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { TestConfig } from '../test.config';  
import {RandomDataUtil} from '../utils/randomDataGenerator';
import { RegisteredData } from '../utils/registeredData';
import { ReportUtil } from '../reports/reportsUtil';
import { logger } from '../reports/logging';


let homePage:HomePage;
let registrationPage :RegistrationPage;
let testConfig:TestConfig;
let registeredData:RegisteredData;
let gmail:string;
let password:string;

        

test.beforeEach(async ({page})=>{

         homePage = new HomePage(page);
         registrationPage = new RegistrationPage(page);
         testConfig = new TestConfig();
         registeredData=new RegisteredData();
         await page.goto(testConfig.BaseURL);

});

test.afterEach(async ({page})=>{
    await page.close();
})

test.describe('Account Registration Tests @s', () => {
    logger.info('Starting Account Registration Tests');
    test('Verify Account Registration @smoke', async ({page},testInfo) => {
        await ReportUtil.logStepWithScreenshot(page,testInfo,"Home Page ", async ()=>{
            await expect(homePage.IsHomePageDisplayed()).toBeTruthy();
          
        })
        await ReportUtil.logStepWithScreenshot(page,testInfo,"Registration Page ", async ()=>{
        //await expect(homePage.IsHomePageDisplayed()).toBeTruthy();
        await homePage.clickOnMyAccount();
        await homePage.clickOnRegister();
        await registrationPage.enterFirstName(RandomDataUtil.getFirstName());     
        await registrationPage.enterLastName(RandomDataUtil.getLastName());
        gmail=RandomDataUtil.getEmail();
        await console.log(gmail);
        await registrationPage.enterEmail(gmail);
        
        password=RandomDataUtil.getPassord();
        await console.log(password);
        await registrationPage.enterPassword(password);
        await registrationPage.enterConfirmPassword(password);
        await registrationPage.enterTelephone(RandomDataUtil.getPhoneNumber());
        await registrationPage.acceptPrivacyPolicy();
        })
        await ReportUtil.logStepWithScreenshot(page,testInfo,"Registration completed ", async ()=>{
        
        await registrationPage.clickContinue();
        await expect(registrationPage.isRegistrationSuccessful()).toBeTruthy();
        })
        await registeredData.PushRecords(gmail,password);
    
        await console.log('Faker data written to CSV successfully!');
        
        
    });   
});   
