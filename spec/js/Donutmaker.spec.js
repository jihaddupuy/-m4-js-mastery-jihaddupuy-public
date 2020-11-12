describe('donut maker should add donuts:', function(){

    let underTest;
    
    beforeEach( function(){
        underTest = new DonutMaker()
    })
   describe('donut maker should have properties', function(){

        describe('should have donut', function(){
            it('should have a default of 0',function(){
            expect(underTest.donutCount).toBe(0)
            })
        })
        describe('get donut should return current value of donut',function(){
            it('should retun 0 for new DonutMaker',function(){
                expect(underTest.getDonutCount()).toBe(0)
            })
        })
        describe('donutMaker should addDonut when addDonut is clicked', function(){
            describe('when addDonut is pressed',function(){
                it('should add donut by 1',function(){
                    underTest.addDonut()
                    expect(underTest.getDonutCount()).toBe(1)
                })
            })
        })
        describe('autoclickerCount should increase by 1 when purchased',function(){
            it('when autoclicker is purchased', function(){
            //act
            underTest.purchaseAutoClicker()
            //assert
            expect(underTest.getAutoClickerCount()).toBe(1)
        })

        })
        describe('DonutMaker should autoClick when auto clicker is purchased',function(){
            it('should cost donutCount 100',function(){
        //act
        underTest.addDonut(); // Donut count should decress from 100 to 0
        underTest.purchaseAutoClicker()
        // assert
        expect(underTest.addDonut())
             })
        })
        describe('Donut Maker should increase the cost of each auto click with every new purchase',function(){
            it('should increase autoclicker count by 10%',function(){
                    //act
                    underTest.getAutoClickerCost()
                    //assert
                    expect(underTest.increaseCostOfAutoClicker()).toBe(110)
            })
        })
   })
})