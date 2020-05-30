const {Given , When , Then  } = require('cucumber');
const LoginPage = require ('E:/NISHAFREM/Pages/loginpage.js')
//const feature = require('E:/NISHAFREM/features/login.feature');



Given ('user navigates to the website', function () {
     
       browser.maximizeWindow()
       browser.url('https://nextgentest.whitehallfinance.com')
              
       });



When ('Insert Credential' , function () {    

            LoginPage.username.click()
            browser.pause(1000)
            LoginPage.username.setValue('tecdune@tecdune.com')
            browser.pause(1000)
            LoginPage.password.click()
            browser.pause(1000)
            LoginPage.password.setValue('Whitehall2020!')
            browser.pause(1000)
            
        });

 Then ('url should open & login in website', function() {

      LoginPage.signin.click()
      browser.pause(10000)

      });

 Then ('logout from website', function() {

      LoginPage.logout.click()
      
       });
 