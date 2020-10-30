describe('donut maker should add donuts:', function(){
    let underTest;
    
    beforeEach( function(){
        underTest =new Donut();
    })

   describe('donut maker should have properties', function(){

        describe('should have donut', function(){
            it('should have a default of 0',function(){
            expext(underTest.Donut).toBe(0)
            })
        })
   })
})