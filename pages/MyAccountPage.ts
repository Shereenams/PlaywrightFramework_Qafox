import {Page,Locator} from '@playwright/test';


export class MyAccountPage{
    private readonly page:Page;
    private readonly myAccount:Locator;
    private readonly logout:Locator;

    constructor(page:Page){
        this.page=page;
        this.myAccount=this.page.locator("h2:has-text('My Account')");
        this.logout=this.page.getByRole( 'link',{name:'Logout'});

    }
    async isMyAccountVisible(){
            //return (await this.myAccount.isVisible());

        try{
            
           await  console.log(this.page.title());
            return (await this.myAccount.isVisible());
        }
        catch(error){
            await console.log("Not your account")
            throw error;
        }
    }
}