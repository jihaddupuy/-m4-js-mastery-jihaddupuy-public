class DonutMaker {
    constructor(){
        this.donutCount = 0;
        this.autoClickerCount=0;
        this.autoClickerCost=100;
        this.donutmultiplier=10;
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
        this.donutmultiplier+=1;
    }
    returnDonutMultiplier(){
        return this.donutmultiplier;
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


