# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> Account Registration Tests >> Verify Account Registration
- Location: tests\AccountRegistration.spec.ts:36:9

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('heading', { name: 'Your Account Has Been Created!' }) to be visible
    - waiting for" https://tutorialsninja.com/demo/index.php?route=account/register" navigation to finish...

```

# Test source

```ts
  1   | import { Page, Locator,expect } from '@playwright/test';
  2   | 
  3   | export class RegistrationPage {
  4   |     private readonly page: Page;
  5   |     private readonly firstNameInput: Locator;
  6   |     private readonly lastNameInput: Locator;
  7   |     private readonly emailInput: Locator;
  8   |     private readonly passwordInput: Locator;
  9   |     private readonly newsletterYesRadio: Locator;
  10  |     private readonly policyCheckbox: Locator;
  11  |     private readonly continueButton: Locator;
  12  |     private readonly registrationSuccessMessage: Locator;
  13  |     private readonly telephoneInput: Locator;
  14  |     private readonly confirmPasswordInput: Locator;
  15  | 
  16  |     constructor(page: Page) {
  17  |         this.page = page;
  18  |         this.firstNameInput = this.page.getByPlaceholder('First Name');
  19  |         this.lastNameInput = this.page.getByPlaceholder('Last Name');
  20  |         this.emailInput = this.page.getByPlaceholder('E-Mail');
  21  |         this.telephoneInput = this.page.getByPlaceholder('Telephone');
  22  |         this.passwordInput = this.page.locator('[name="password"]');
  23  |         this.confirmPasswordInput = this.page.locator('[name="confirm"]');
  24  |         this.newsletterYesRadio = this.page.getByRole('radio', { name: 'Yes'})
  25  |         this.policyCheckbox = this.page.locator('[name="agree"]')
  26  |         this.continueButton = this.page.getByRole('button', { name: 'Continue' });
  27  |         this.registrationSuccessMessage = this.page.getByRole('heading', { name: 'Your Account Has Been Created!' });
  28  |     }
  29  |     async enterFirstName(firstName: string) {
  30  |         try {
  31  |             await this.firstNameInput.fill(firstName);
  32  |         } catch (error) {
  33  |             console.error('Error entering first name:', error);
  34  |         }
  35  |     }
  36  |     async enterLastName(lastName: string) {
  37  |         try {
  38  |             await this.lastNameInput.fill(lastName);
  39  |         } catch (error) {
  40  |             console.error('Error entering last name:', error);
  41  |         }
  42  |     }
  43  |     async enterEmail(email: string) {
  44  |         try {
  45  |             await this.emailInput.fill(email);
  46  |         } catch (error) {
  47  |             console.error('Error entering email:', error);
  48  |         }
  49  |     }
  50  |     async enterTelephone(telephone: string) {
  51  |         try {
  52  |             await this.telephoneInput.fill(telephone);  
  53  |         } catch (error) {
  54  |             console.error('Error entering telephone:', error);
  55  |         }
  56  |     }
  57  |     async enterPassword(password: string) {
  58  |         try {
  59  |             await this.passwordInput.fill(password);
  60  |         } catch (error) {
  61  |             console.error('Error entering password:', error);
  62  |         }
  63  |     }      
  64  |     async enterConfirmPassword(confirmPassword: string) {
  65  |         try {
  66  |             await this.confirmPasswordInput.fill(confirmPassword); 
  67  |         } catch (error) {
  68  |             console.error('Error entering confirm password:', error);
  69  |         }
  70  |     }
  71  |     async subscribeToNewsletter() {
  72  |         try {
  73  |             await this.newsletterYesRadio.check();
  74  |         } catch (error) {
  75  |             console.error('Error subscribing to newsletter:', error);
  76  |         }
  77  |     }
  78  |     async acceptPrivacyPolicy() {
  79  |         try {
  80  |             await this.policyCheckbox.check();
  81  |             
  82  |         } catch (error) {
  83  |             console.error('Error accepting privacy policy:', error);
  84  |         }
  85  |     }
  86  |     async clickContinue() {
  87  |         try {
  88  |             await this.continueButton.click();
  89  |         } catch (error) {
  90  |             console.error('Error clicking on Continue button:', error);
  91  |         }
  92  |     }
  93  |     async isRegistrationSuccessful() {
  94  |        
  95  |         
> 96  |             await this.registrationSuccessMessage.waitFor({ state: 'visible', timeout: 5000 });
      |                                                   ^ Error: locator.waitFor: Target page, context or browser has been closed
  97  |             const text = await this.registrationSuccessMessage.textContent();
  98  |             return text?.includes('Your Account Has Been Created!');
  99  |         
  100 |     }   
  101 |     async register(dataObject: { 
  102 |         firstName: string, 
  103 |         lastName: string, 
  104 |         email: string, 
  105 |         password: string,
  106 |         confirmPassword: string,
  107 |         telephone: string
  108 |     }) {
  109 |         await this.enterFirstName(dataObject.firstName);
  110 |         await this.enterLastName(dataObject.lastName);
  111 |         await this.enterEmail(dataObject.email);
  112 |         await this.enterPassword(dataObject.password);
  113 |         await this.enterConfirmPassword(dataObject.confirmPassword);
  114 |         await this.enterTelephone(dataObject.telephone);
  115 |         await this.subscribeToNewsletter();
  116 |         await this.acceptPrivacyPolicy();
  117 |         await this.clickContinue();
  118 |         await expect(this.isRegistrationSuccessful()).toBeTruthy();
  119 |     }
  120 | }
  121 | 
  122 | 
```