import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TestConfig } from '../test.config';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { DataProvider } from '../utils/dataProvider';
import { ReportUtil } from '../reports/reportsUtil';

const dataJson = DataProvider.getDatafromJSON('data/logindata.json');
const dataCSV: any = DataProvider.getDatafromcsv('data/faker-users.csv');

let homePage: HomePage;
let testConfig: TestConfig;
let loginPage: LoginPage;
let myAccount: MyAccountPage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    testConfig = new TestConfig();
    await page.goto(testConfig.BaseURL);
    loginPage = new LoginPage(page);
    myAccount = new MyAccountPage(page);

});

test.describe("Login scenario", async () => {

    for (let data of dataCSV) {

        test(`Login with Valid credentials for ${data.Email}`, async ({ page },testInfo) => {
            await ReportUtil.logStepWithScreenshot(page,testInfo,"Home Page ", async ()=>{
            await expect(homePage.IsHomePageDisplayed()).toBeTruthy();
            })
            await ReportUtil.logStepWithScreenshot(page,testInfo,"Click on My Account ", async ()=>{
            
            await homePage.clickOnMyAccount();
            })
            await ReportUtil.logStepWithScreenshot(page,testInfo,"Login Page ", async ()=>{
            await homePage.clickOnLogin();
            await expect(loginPage.IsLoginPageVisible).toBeTruthy();
            await loginPage.EnterEmail(data.Email);
            await loginPage.EnterPassword(data.Password);  
            })
            await ReportUtil.logStepWithScreenshot(page,testInfo,"Welcome Page ", async ()=>{ 
            //title shold be
            await loginPage.ClickOnLogin();
            await expect(myAccount.isMyAccountVisible()).toBeTruthy();
            })



            // await page.pause();

        })
    }


    for (let dataJ of dataJson) {

        test(`Login with invalid credentials for `, async ({ page },testInfo) => {
            await ReportUtil.logStepWithScreenshot(page,testInfo,"Home Page ", async ()=>{
            await expect(homePage.IsHomePageDisplayed()).toBeTruthy();
            })
            await ReportUtil.logStepWithScreenshot(page,testInfo,"MyAccount Page ", async ()=>{
            await homePage.clickOnMyAccount();
            })
            await ReportUtil.logStepWithScreenshot(page,testInfo,"Welcome Page ", async ()=>{
            await homePage.clickOnLogin();
            await expect(loginPage.IsLoginPageVisible).toBeTruthy();
            await loginPage.EnterEmail(dataJ.email);
            await loginPage.EnterPassword(dataJ.password);
            await loginPage.ClickOnLogin();
            await expect(await myAccount.isMyAccountVisible()).toBeTruthy();
            })



            // await page.pause();

        })
    }
});
