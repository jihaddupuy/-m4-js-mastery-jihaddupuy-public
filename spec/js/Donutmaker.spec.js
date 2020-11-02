describe('donut maker should add donuts:', function(){

    let underTest;
    
    beforeEach( function(){
        underTest = new DonutMaker()
    })

   describe('donut maker should have properties', function(){

        describe('should have donut', function(){
            it('should have a default of 0',function(){
            expect(underTest.donut).toBe(0)
            })
        })
        describe('get donut should return current value of donut',function(){
            it('should retun 0 for new car',function(){
                expect(underTest.getDonut()).toBe(0)
            })
        })
   })
})