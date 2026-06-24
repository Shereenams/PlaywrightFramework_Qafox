import { Page,Locator } from "@playwright/test";
export class HomePage {
    private readonly page: Page;
    private readonly myAccountLink: Locator;
    private readonly loginLink: Locator;
    private readonly registerLink: Locator;
    private readonly searchBox: Locator;
    private readonly searchButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.myAccountLink = this.page.locator(`span:has-text("My Account")`)
        this.loginLink = this.page.getByRole('link', { name: 'Login' });
        this.registerLink = this.page.getByRole('link', { name: 'Register' });
        this.searchBox = this.page.getByPlaceholder("search");
        this.searchButton =this.page.locator(`//button[@data-lang='en-gb']`);
        


    }
    async IsHomePageDisplayed() {
        const title = await this.page.title();
            if(title)
                return true;
            else
                return false;
    }
    async clickOnMyAccount() {
        try{
            await this.myAccountLink.click();
        }catch(error){
            console.error('Error clicking on My Account link:', error);
        }

    }
    async clickOnLogin() {
        try{
            await this.loginLink.click();
        }catch(error){
            console.error('Error clicking on Login link:', error);
        }
    }
    async clickOnRegister() {
        try{
            await this.registerLink.click();
        }catch(error){
            console.error('Error clicking on Register link:', error);
        }
    }
    async enterSearchText(searchText: string) {
        try{
            await this.searchBox.fill(searchText);
        }catch(error){
            console.error('Error entering search text:', error);
        }   
    }
    async clickOnSearchButton() {
        try{
            await this.searchButton.click();
        }catch(error){
            console.error('Error clicking on Search button:', error);
        }   
    }
}