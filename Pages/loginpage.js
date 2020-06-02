

class LoginPage  {

    
    get username() { return $('#login_email') }
    get password() { return $('#login_pass') }
    get signin() { return $('#login_submit > span') }
    get alert() { return $('#div > p-messages > div') }
    get logout(){ return $('#logout_session > span')}
    get dashboard(){ return $('body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li.ng-tns-c2-18.ng-star-inserted.active-menuitem > a > span')}
    get loginerr() {return $('=Incorrect usermail or password.')}
    get pagebot() {return $('body > app-root > app-main > div > div > div.layout-main > div > app-footer > div > div > div > span.footer-text-left')}
    get pageheader() {return $('body > app-root > app-main > div > div > div.layout-main > app-breadcrumb > div > ul > li:nth-child(1) > a > em')}


    get screnshot () { 
        
        const moment = require('moment')    
        const timestamp = moment().format('DDMMYYYY-HHmmss')
    //     const timestamp = moment().format('dd-MM-yyyy HH-mm-ss')
       const scrpath = ("./screenshots/image_" + timestamp  +  ".png")

        
        return this.screnshot}
}

module.exports = new LoginPage();


// class screenshot {
    
//         const timestamp = moment().format('YYYYMMDD-HHmmss.SSS');
//         const filepath = path.join('./screenshots/', timestamp + '.png');
//         browser.saveScreenshot(filepath);
        
   
// }