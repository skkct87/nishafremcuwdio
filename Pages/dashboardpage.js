class AdminDashboard {


    get operations() {
        return $('body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li:nth-child(2) > a > span')
    }
    
    get operationsinv() {
        return $('body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li:nth-child(3) > a > span')
    }
    
    get invoices() {
        return $('/html/body/app-root/app-main/div/div/div[1]/p-scrollpanel/div/div[1]/div/app-menu/ul/li[4]/a/span')
    }
    
    get invoicesnew() {
        return $('=Invoices')
    }
    
    get publishinvoice() {
        return $('=Publish Invoices')
    }
    
    get uploadinvoice() {
        return $('=Upload Invoices')

    }
    
    get invoicehistory() {
        return $('=Invoice History')
    }
    
    get suppliersetup() {
        return $('/html/body/app-root/app-main/div/div/div[1]/p-scrollpanel/div/div[1]/div/app-menu/ul/li[5]/a/span')
    }
    
    get suppliercompnies() {
        return $('//*[@id="ui-tabpanel-0-label"]/span')
    }
    
    get uploadsupplier() {
       return $('=Upload New Suppliers')
      // return $('/html/body/app-root/app-main/div/div/div[2]/div/app-supplier-setup/div/div/div/p-tabview/div/ul/li[2]/a')
    }
    
    get trades() {
        //return $('body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li:nth-child(6) > a > span')
    return $('/html/body/app-root/app-main/div/div/div[1]/p-scrollpanel/div/div[1]/div/app-menu/ul/li[6]/a')
    }

    
    get tradesall() {
        return $('#ui-tabpanel-6-label > span')
    }
    
    get tradehistory() {
        return $('=Trade History')
    }
    
    get company() {
        return $('body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li:nth-child(7) > a > span')
    }
    
    get investorportfolio() {
        //return $('body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li.ng-tns-c2-0.ng-star-inserted.active-menuitem > a > span')
    return $('/html/body/app-root/app-main/div/div/div[1]/p-scrollpanel/div/div[1]/div/app-menu/ul/li[8]/a/span')
    }
    
    get creditline() {
        return $('#ui-tabpanel-8-label > span')
    }
    
    get creditlimit() {
        return $('=CREDIT LIMIT')
    }
    
    get investors() {
        return $('body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li:nth-child(9) > a > span')
    }
    
    get investorcashtr() {
        return $('#ui-tabpanel-0-label > span')
    }
    
    get buyerinvshortfall() {
        return $('=Buyer-Investor Shortfall')
    }
    
    get investorcashposition() {
        return $('=Investor-Cash Positions')
    }
    
    get invbuyercompany() {
        return $('=Investor-Buyer Companies')
    }
    
    get reports() {
        return $('body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li:nth-child(10) > a > span')
    }

    get overduereports(){
        return $('=OVERDUE REPORT')
    }
    
    get paymentschedules() {
        //return $('body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li.ng-tns-c2-1.ng-star-inserted.active-menuitem > a > span')
    return $('/html/body/app-root/app-main/div/div/div[1]/p-scrollpanel/div/div[1]/div/app-menu/ul/li[11]/a/span')
    }
    
    get paymentschedule() {
        return $('#ui-tabpanel-4-label > span')
    }
    
    get scheduledetail() {
        return $('=SCHEDULE DETAILS')
    }
    
    get promnote() {
        //return $('body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li:nth-child(12) > a > span')
   return $('/html/body/app-root/app-main/div/div/div[1]/p-scrollpanel/div/div[1]/div/app-menu/ul/li[12]/a/span')
  //return $('document.querySelector("body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li.ng-tns-c2-0.ng-star-inserted.active-menuitem > a > span")')  
}
    
    get promissorynote() {
        return $('#ui-tabpanel-6-label > span')
    }
    
    get generatepromnote() {
        return $('=GENERATE PROMISSORY NOTE')
    }
    
    get bmaptab() {
       // return $('body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li:nth-child(13) > a > span')
   return $('/html/body/app-root/app-main/div/div/div[1]/p-scrollpanel/div/div[1]/div/app-menu/ul/li[13]/a/span')
 // return $('document.querySelector("body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li.ng-tns-c2-0.ng-star-inserted.active-menuitem > a > span")')  
}
    
    get bmaps() {
        return $('#ui-tabpanel-8-label > span')
    }
    
    get generatebmap() {
        return $('=GENERATE BMAPS')
    }
    
    get repay() {
        return $('=REPAYS')
    }
    
    get generaterepay() {
        return $('=GENERATE REPAYS')
    }
    
    get settings() {
        return $('body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li:nth-child(14) > a > span')
    }
    
    get generalsetting() {
        return $('#ui-tabpanel-12-label > span')
    }
    
    get suppliersetting() {
        return $('=SUPPLIER COMPANY SETTINGS')
    }
    
    get buyersetting() {
        return $('=BUYER COMPANY SETTINGS')
    }
    
    get document() {
        return $('body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li:nth-child(15) > a > span')
    }
    
    get schedulejob() {
        return $('/html/body/app-root/app-main/div/div/div[1]/p-scrollpanel/div/div[1]/div/app-menu/ul/li[16]/a/span')
    }
    
    }
    
    module.exports = new AdminDashboard();