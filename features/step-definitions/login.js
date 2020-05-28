const {Given , When ,  Then  } = require('cucumber');
//const feature = require('E:/NISHAFREM/features/login.feature');


Given ('user navigates to the website', function () {
     
       browser.url('nexgndev.whitehallfinance.com')
       browser.maximizeWindow()
       });

When ('insert Credentials' , function () {
    
            const login = $('#login_email')
            login.click()
            login.setValue('tecdune@tecdune.com')

            const pwd = $('#login_pass')
            pwd.setValue('Whitehall2020!')
            
        });

 Then ('url should open & login in website', function() {

       const signin = $('#login_submit > span')  
       signin.click()
       browser.pause(8000)

      });

 Then ('logout from website', function() {

       const logout = $('#logout_session > span')
       logout.click()



 });
