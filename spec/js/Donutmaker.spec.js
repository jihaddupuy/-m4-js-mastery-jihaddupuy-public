describe('donut maker should add donuts:', function(){

    let underTest;
    
    beforeEach( function(){
        underTest = new DonutMaker();
    })

   describe('donut maker should have properties', function(){

        describe('should have donut', function(){
            it('should have a default of 0',function(){
            expect(underTest.donut).toBe(0)
            })
        })
   })
})