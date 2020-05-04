describe('This is assignment # 1',  function () {
    it('should successfully open up a website',  function (){
    current_url = 'http://www.way2automation.com/angularjs-protractor/registeration/#/login'
    browser.get(current_url);
    //browser.pause(5000)
    var x = browser.getCurrentUrl()
        expect(y).toBe(current_url);
    console.info('URLs have matched and test executed successfully')
     });
   });
