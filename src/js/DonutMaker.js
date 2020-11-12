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
        this.donutCount += this.donutClickValue;
        if(this.donutCount <0){
            this.donutCount =0;
        }
        
    }

    getDonutCount(){
        return this.donutCount;
    }

    getDonutClickValue(){
        return this.donutClickValue;
    }

    addAutoClicker(){
        this.autoClickerCount *=(this.donutMultiplierCount)
    }

    purchaseAutoClicker(){
        this.autoClickerCount+=1;
        if (   this.donutCount <100){
            this.autoClickerCount =0
        }
       this.donutCount-=this.autoClickerCost
    }

    getAutoClickerCount(){
        return this.autoClickerCount;
    }
    getAutoClickerCost(){
        return this.autoClickerCost;
    }

    increaseCostOfAutoClicker(){  
      this.autoClickerCost += ( this.autoClickerCost *0.10)
    }

    autoCountAffectsDonutCountWhenActive(){
        for( let i=0; i< this.autoClickerCount; i++){
            this.getDonutClickValue()
        }
    }

    getDonutMultiplier(){
        this.donutMultiplierCount+=1;
        this.donutCount -= this.donutMultiplierCost;
    }

    returnDonutMultiplier(){
        return this.donutMultiplierCount;
    }

    increaseCostDonutmultiplier(){
        this.donutMultiplierCost +=(this.donutMultiplierCost * 0.10)
        return this.donutMultiplierCost
        
    }

    increaseDonutmultiplier(){
      this.donutClickValue =  Math.pow(1.2, this.donutMultiplierCount)
    }

    getDonutMultiplierCost(){
       return this.donutMultiplierCost;
    }
}