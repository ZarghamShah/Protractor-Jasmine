var addUser_POM = require('../POM/addUser_POM')
const POM = new addUser_POM()

describe('Make ammendments in the record', function () {

    beforeAll(function () {

        browser.get('http://www.way2automation.com/angularjs-protractor/webtables/')
        var Title = browser.getTitle()
        expect(Title).toBe("Protractor practice website - WebTables")
        
    });

    it('should open the website and add a record', function () {

        POM.add_Record()
        expect(POM.tableData.getText()).toBe("Zargham");
        
    });

    it('should open the website and edit a record', function () {

        POM.edit_FirstName()
    })

    it('should verify if the name is added in the tale', function () {

        POM.Verify_edit_User()
    })
});

