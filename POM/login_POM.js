module.exports = class login_POM {

    get username() { return (element(by.model('Auth.user.name'))) }
    get password() { return (element(by.model('Auth.user.password'))) }
    get description() { return (element(by.xpath('//*[@id="formly_1_input_username_0"]'))) }
    get header_Home() {return  (element.all(by.className('ng-scope')).get(0))}
    get login_BTN() { return (element(by.className("btn btn-danger"))) }
    get logout_BTN() { return (element(by.partialLinkText("Logout"))) }
    get error_MSG() { return (element(by.xpath('/html/body/div[3]/div/div/div/div[2]'))) }


    valid_sign_In() {
        
        this.username.clear()
        this.username.sendKeys(browser.params.login.username)
        this.password.clear()
        this.password.sendKeys(browser.params.login.password)
        this.description.clear()
        this.description.sendKeys("Practice")
        this.login_BTN.click()
        console.info("You are now signed in")
        this.header_Home.isDisplayed()
        this.logout_BTN.click()
        console.info("You are now back to the main page")
        this.username.isDisplayed()
    }

    invalid_sign_In() {

        this.username.sendKeys("password")
        this.password.sendKeys("password")
        this.description.sendKeys("Practice")
        this.login_BTN.click()
        this.error_MSG.isDisplayed()
        console.info("Error message is displayed on the screen")
    }
}
 