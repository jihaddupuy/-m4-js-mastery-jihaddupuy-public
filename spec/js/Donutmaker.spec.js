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
            it('should retun 0 for new DonutMaker',function(){
                expect(underTest.getDonut()).toBe(0)
            })
        })
        describe('donutMaker should addDonut when addDonut is clicked', function(){
            describe('when addDonut is pressed',function(){
                it('should add donut by 1',function(){
                    underTest.addDonut()
                    expect(underTest.getDonut()).toBe(1)
                })
            })

        })
        describe('DonutMaker should autoClick when auto clicker is purchased',function(){
            it('should cost donutCount 100',function(){
        //act
        underTest.addDonut(); // D
        underTest.buyAutoclicker()
        // assert
        expect(underTest.addDonut())
    })
    })
   })
})