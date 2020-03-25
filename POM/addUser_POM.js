var dataFile = require('../dataFile.json')

module.exports = class addUser_POM {

    get addBTN() { return (element(by.className("btn btn-link pull-right"))) };
    get addUserWindow() { return (element(by.className("modal ng-scope"))) };
    get firstName() { return (element(by.name("FirstName"))) };
    get lastName() { return (element(by.name("LastName"))) };
    get userName() { return (element(by.name("UserName"))) };
    get password() { return (element(by.name("Password"))) };
    get role() { return (element(by.name("RoleId", "Sales Team")).$$('[value="1"]')) };
    get email() { return (element(by.name("Email"))) };
    get cellNumber() { return (element(by.name("Mobilephone"))) };
    get save() { return (element(by.className("btn btn-success"))) };
    get table() { return ($("tbody").$$("tr").count()) };
    get tableData() { return (element.all(by.css("tbody")).all(by.tagName("td"))).first() };
    get editButton() { return (element.all(by.className("btn btn-link"))) };


    add_Record() {

        this.addBTN.isDisplayed();
        this.addBTN.click();
        this.addUserWindow.isDisplayed();
        this.firstName.sendKeys(dataFile.firstName);
        this.lastName.sendKeys(dataFile.lastName);
        this.userName.sendKeys(dataFile.userName);
        this.password.sendKeys(dataFile.password);
        this.role.click();
        this.email.sendKeys(dataFile.email);
        this.cellNumber.sendKeys(dataFile.cellNumber);
        this.save.click();
    }

    edit_FirstName() {

        this.editButton.get(5).click();
        this.firstName.clear();
        this.firstName.sendKeys(dataFile.editFirstName);
        this.save.click();
    }
    Verify_edit_User() {

        element.all(by.repeater('column in columns')).each(function (data) {
            data.getText().then(function (text) {
                if (text == 'Zargham Ahmad') {
                    console.log("Zargham is added successfully............");
                }
            })
        })
    }
}