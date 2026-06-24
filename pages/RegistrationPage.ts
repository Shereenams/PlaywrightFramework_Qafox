import { Page, Locator,expect } from '@playwright/test';

export class RegistrationPage {
    private readonly page: Page;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly newsletterYesRadio: Locator;
    private readonly policyCheckbox: Locator;
    private readonly continueButton: Locator;
    private readonly registrationSuccessMessage: Locator;
    private readonly telephoneInput: Locator;
    private readonly confirmPasswordInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = this.page.getByPlaceholder('First Name');
        this.lastNameInput = this.page.getByPlaceholder('Last Name');
        this.emailInput = this.page.getByPlaceholder('E-Mail');
        this.telephoneInput = this.page.getByPlaceholder('Telephone');
        this.passwordInput = this.page.locator('[name="password"]');
        this.confirmPasswordInput = this.page.locator('[name="confirm"]');
        this.newsletterYesRadio = this.page.getByRole('radio', { name: 'Yes'})
        this.policyCheckbox = this.page.locator('[name="agree"]')
        this.continueButton = this.page.getByRole('button', { name: 'Continue' });
        this.registrationSuccessMessage = this.page.getByRole('heading', { name: 'Your Account Has Been Created!' });
    }
    async enterFirstName(firstName: string) {
        try {
            await this.firstNameInput.fill(firstName);
        } catch (error) {
            console.error('Error entering first name:', error);
        }
    }
    async enterLastName(lastName: string) {
        try {
            await this.lastNameInput.fill(lastName);
        } catch (error) {
            console.error('Error entering last name:', error);
        }
    }
    async enterEmail(email: string) {
        try {
            await this.emailInput.fill(email);
        } catch (error) {
            console.error('Error entering email:', error);
        }
    }
    async enterTelephone(telephone: string) {
        try {
            await this.telephoneInput.fill(telephone);  
        } catch (error) {
            console.error('Error entering telephone:', error);
        }
    }
    async enterPassword(password: string) {
        try {
            await this.passwordInput.fill(password);
        } catch (error) {
            console.error('Error entering password:', error);
        }
    }      
    async enterConfirmPassword(confirmPassword: string) {
        try {
            await this.confirmPasswordInput.fill(confirmPassword); 
        } catch (error) {
            console.error('Error entering confirm password:', error);
        }
    }
    async subscribeToNewsletter() {
        try {
            await this.newsletterYesRadio.check();
        } catch (error) {
            console.error('Error subscribing to newsletter:', error);
        }
    }
    async acceptPrivacyPolicy() {
        try {
            await this.policyCheckbox.check();
            
        } catch (error) {
            console.error('Error accepting privacy policy:', error);
        }
    }
    async clickContinue() {
        try {
            await this.continueButton.click();
        } catch (error) {
            console.error('Error clicking on Continue button:', error);
        }
    }
    async isRegistrationSuccessful() {
       
        
            await this.registrationSuccessMessage.waitFor({ state: 'visible', timeout: 5000 });
            const text = await this.registrationSuccessMessage.textContent();
            return text?.includes('Your Account Has Been Created!');
        
    }   
    async register(dataObject: { 
        firstName: string, 
        lastName: string, 
        email: string, 
        password: string,
        confirmPassword: string,
        telephone: string
    }) {
        await this.enterFirstName(dataObject.firstName);
        await this.enterLastName(dataObject.lastName);
        await this.enterEmail(dataObject.email);
        await this.enterPassword(dataObject.password);
        await this.enterConfirmPassword(dataObject.confirmPassword);
        await this.enterTelephone(dataObject.telephone);
        await this.subscribeToNewsletter();
        await this.acceptPrivacyPolicy();
        await this.clickContinue();
        await expect(this.isRegistrationSuccessful()).toBeTruthy();
    }
}

