class DonutMaker {
    constructor(){
        this.donutCount = 0;
        this.autoClickerCount=0;
        this.autoClickerCost=100;
        this.donutMultiplierCost=10;
        this.donutMultiplierCount=0;
        this.donutClickValue=1;

    }

    addDonut(){
        this.donutCount += 1;
    }

    getDonutCount(){
        return this.donutCount;
    }
   
    purchaseAutoClicker(){
        this.autoClickerCount+=1;
        this.donutCount-=this.autoClickerCost;
    }

    getAutoClickerCount(){
        return this.autoClickerCount;
    }

    increaseCostOfAutoClicker(){  
      this.autoClickerCost += ( this.autoClickerCost *0.10)
    }

    autoCountAffectsDonutCountWhenActive(){
        for( let i=0; i< this.autoClickerCount; i++){
            this.addDonut()
        }
    }

    getDonutMultiplier(){
        this.donutMultiplierCount+=1;
        this.donutCount -=10;
    }

    returnDonutMultiplier(){
        return this.donutMultiplierCount;
    }

    increaseCostDonutmultiplier(){
        this.donutMultiplierCost +=(this.donutMultiplierCost * 0.10)
        
    }

    increasetDonutmultiplier(){
      this.donutClickValue =  Math.pow(1.2, DonutMultiplierCount)
    }

    addAutoClicker(){
        this.autoClickerCount *=(this.donutMultiplierCount)
    }

    getDonutClickValue(){
        return this.DonutClickValue
    }

}






// console.log(AddDonut)
// let AddDonut =+1;
// function AddDonut(Number){
//     return Number == 1
//     alert(AddDonut)
// }
// let Autoclicker =100
// function Autoclicker(Number){
// return Autoclicker
// Autoclicker-AddDonut = AddDonut 
// }
// Autoclicker =+1




   
//     constructor AddDonut


