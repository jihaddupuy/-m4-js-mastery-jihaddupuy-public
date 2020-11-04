class DonutMaker {
    constructor(){
        this.donutCount = 0;
        this.autoClickerCount=0;
        this.autoClickerCost=100;
        this.donutMultiplier=10;
        this.donutMultiplierCount=0;
        this.donutMultiplierCost=

    }
    addDonut(){
        this.donutCount += 1;
    }
    getDonut(){
        return this.donutCount;
    }
   
    purchaseAutoClicker(){
        this.autoClickerCount+=1;
    }
    buyAutoClicker(){
         this.donutCount++
        }
    getAutoClickerCount(){
        return this.autoClickerCount;
    }
    IncreaseCostOfAutoClicker(){
        
        this.autoClickerCost +=0.10;
        if(this.donutCount< 100){
            this.autoClickerCount =0;
        }
    }
    autoCountAffectsDonutCountWhenActive(){
        for( let i=0; i< this.autoClickerCount; i++){
            this.addDonut()
        }
    }
    GetDonutMultiplier(){
        this.donutMultiplier+=1;
        this.donutCount -=10;
    }
    returnDonutMultiplier(){
        return this.donutMultiplier;
    }
    increaseCostDonutmultiplier(){
        this.donutMultiplier +=0.10;
        if(this.donutCount<10)
        this.donutMultiplier=0;
    }
    increasetDonutmultiplier(){
        Math.pow(1.2, DonutMultiplierCount)
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


