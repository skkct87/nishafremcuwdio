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
    }
    
    get trades() {
        return $('body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li:nth-child(6) > a > span')
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
        return $('body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li.ng-tns-c2-0.ng-star-inserted.active-menuitem > a > span')
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
        return $('#ui-tabpanel-1-label > span')
    }
    
    get investorcashposition() {
        return $('#ui-tabpanel-2-label > span')
    }
    
    get invbuyercompany() {
        return $('#ui-tabpanel-3-label > span')
    }
    
    get reports() {
        return $('body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li:nth-child(10) > a > span')
    }
    
    get paymentschedules() {
        return $('body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li.ng-tns-c2-1.ng-star-inserted.active-menuitem > a > span')
    }
    
    get paymentschedule() {
        return $('#ui-tabpanel-4-label > span')
    }
    
    get scheduledetail() {
        return $('#ui-tabpanel-5-label > span')
    }
    
    get promnote() {
        return $('body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li:nth-child(12) > a > span')
    }
    
    get promissorynote() {
        return $('#ui-tabpanel-6-label > span')
    }
    
    get generatepromnote() {
        return $('#ui-tabpanel-7-label > span')
    }
    
    get bmaptab() {
        return $('body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li:nth-child(13) > a > span')
    }
    
    get bmaps() {
        return $('#ui-tabpanel-8-label > span')
    }
    
    get generatebmap() {
        return $('#ui-tabpanel-9-label > span')
    }
    
    get repay() {
        return $('#ui-tabpanel-10-label > span')
    }
    
    get generaterepay() {
        return $('#ui-tabpanel-11-label > span')
    }
    
    get settings() {
        return $('body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li:nth-child(14) > a > span')
    }
    
    get generalsetting() {
        return $('#ui-tabpanel-12-label > span')
    }
    
    get suppliersetting() {
        return $('#ui-tabpanel-13-label > span')
    }
    
    get buyersetting() {
        return $('#ui-tabpanel-14-label > span')
    }
    
    get document() {
        return $('body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li:nth-child(15) > a > span')
    }
    
    
    }
    
    module.exports = new AdminDashboard();