import { test, Page } from '@playwright/test';

export class ReportUtil {
    // static async logStep(stepName:string, action:()=>Promise<void>) {
    //     await test.info(stepName, async () => {
    //         await action();
    //     });
    // }
    static async logStepWithScreenshot(page:Page,testInfo:any, stepName:string, action:()=>Promise<void>) {
        await test.step(stepName, async () => {
            await action();
            await page.screenshot({ path: 'screenshot.png' });

        // Attach screenshot to Allure
        await testInfo.attach('screenshot', {
            path: 'screenshot.png',
            contentType: 'image/png',
        });
        await testInfo.attach('log', {
            body: stepName,
            contentType: 'text/plain',
        });
        })
        

    }
}
