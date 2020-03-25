var login_POM = require('../POM/login_POM')
const POM = new login_POM()

describe('Check the Validation of the signIN page',  ()=> {

  beforeEach(function(){
    browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login')
    var Title = browser.getTitle()
    expect(Title).toBe("Protractor practice website - Registration")
});

  it('should validate the correct credentials',  ()=> {
    
    POM.valid_sign_In()
    console.info("Sign IN is Valid")
})
  it('should validate the incorrect credentials', ()=> {
    POM.invalid_sign_In()
    console.info("Sign In is Invalid")
});
});
