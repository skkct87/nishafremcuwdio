const {Given , When , Then  } = require('cucumber');
const LoginPage = require("E:/NISHAFREM/Pages/loginpage.js")
const AdminDashboard = require("E:/NISHAFREM/Pages/dashboardpage.js")
//const moment = require('moment')
//const timestamp = moment().format('YYYYMMDD-HHmmss.SSS')





Given ('User navigate to Whitehall Finance website' , function() {
        browser.maximizeWindow();
        // const zoomInJS = "document.body.style.zoom='80%'";
        // jsExecutor.executeScript(zoomInJS);

        //browser.ExecuteScript("document.body.style.zoom = '70%'");
        browser.url('https://nextgentest.whitehallfinance.com');
     });

When ('User insert credentials & login',function() {
            LoginPage.username.click();
            browser.pause(1000);
            //LoginPage.screnshot();
            LoginPage.username.setValue('tecdune@tecdune.com');
            browser.pause(1000);
            LoginPage.password.click();
            browser.pause(1000);
            LoginPage.password.setValue('Whitehall2020!');
            browser.saveScreenshot(scrpath);
            browser.pause(3000);            
            LoginPage.signin.click();
            browser.pause(10000);
            LoginPage.pagebot.scrollIntoView();
            browser.saveScreenshot(scrpath);
            browser.pause(3000);
            LoginPage.logout.scrollIntoView();
            browser.pause(2000);
            
     });

Then ('User can See Dashboard & Screens', function(){

        //LoginPage.pagebot.waitForDisplayed();
        AdminDashboard.operations.click();
        browser.pause(5000);
        browser.saveScreenshot(scrpath);
        //const timestamp = moment().format('YYYYMMDD-HHmmss.SSS');
       // browser.saveScreenshot("./screenshots/image_" + timestamp + ".png");
        browser.pause(1000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.operationsinv.click();
        console.log('operation inve screen');
        browser.pause(1000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.invoices.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(3000);
        LoginPage.logout.scrollIntoView();
        browser.pause(2000);
        AdminDashboard.publishinvoice.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(1000);
        LoginPage.logout.scrollIntoView();
        browser.pause(2000);
        AdminDashboard.uploadinvoice.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(1000);
        LoginPage.pageheader.scrollIntoView();
        browser.pause(2000);
        AdminDashboard.invoicehistory.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(1000);
        LoginPage.logout.scrollIntoView();
        browser.pause(2000);
        AdminDashboard.suppliersetup.click();
        console.log("Enter in Supplier Setup");
        browser.pause(5000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        LoginPage.logout.waitForDisplayed();
        browser.pause(1000);
        //browser.setTimeout({ 'script': 60000 });
        console.log("move to Supplier upload");
        AdminDashboard.uploadsupplier.click();
        //browser.setTimeout({ 'pageLoad': 20000 });
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(1000);
        LoginPage.logout.scrollIntoView();
        browser.pause(3000);
        AdminDashboard.trades.click();
        //browser.setTimeout({ 'pageLoad': 20000 });
        browser.pause(5000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(3000);
        LoginPage.logout.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.tradehistory.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(2000);
        AdminDashboard.company.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(2000);
        AdminDashboard.investorportfolio.click();
        browser.pause(5000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(2000);
        AdminDashboard.creditlimit.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.schedulejob.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.investors.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.buyerinvshortfall.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.investorcashposition.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.invbuyercompany.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.reports.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.overduereports.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.paymentschedules.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.scheduledetail.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.promnote.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.generatepromnote.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.bmaptab.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.generatebmap.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.repay.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.generaterepay.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.settings.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.suppliersetting.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.buyersetting.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.document.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(1000);
        AdminDashboard.schedulejob.click();
        browser.pause(3000);
        LoginPage.pagebot.scrollIntoView();
        browser.pause(2000);
        LoginPage.logout.scrollIntoView();
        browser.pause(1000);
        console.log("Dashboard Verifiction Finished !!!!")
        


        

        





      });

Then ('User will logout' ,function() {

        LoginPage.logout.click()
});