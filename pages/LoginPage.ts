import {Page,Locator} from '@playwright/test'
export class LoginPage{
    private readonly page:Page;
    private readonly email:Locator;
    private readonly password:Locator;
    private readonly login:Locator;

    constructor(page:Page){
        this.page=page;
        this.email=this.page.getByPlaceholder("E-Mail Address");
        this.password=this.page.getByPlaceholder('Password');
        this.login=this.page.getByRole('button',{name:'Login'}) 
    }
    async IsLoginPageVisible(){
        const title=await this.page.title();
        if(title)
            return true;
        else
            return false;
    }
    async EnterEmail(email:string){
        await this.email.fill(email);

    }
     async EnterPassword(pass:string){
        await this.password.fill(pass);

    }
    async ClickOnLogin(){
        await this.login.click();
    }


}