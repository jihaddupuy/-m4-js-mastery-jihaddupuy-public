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

    purchaseAutoClicker(){
        if (this.donutCount >= this.autoClickerCost){
            this.autoClickerCount+=1; 
            this.donutCount-=this.autoClickerCost
        }
    }

    getAutoClickerCount(){
        return this.autoClickerCount;
    }
    getAutoClickerCost(){
        return this.autoClickerCost;
    }

    increaseCostOfAutoClicker(){  
      this.autoClickerCost += ( this.autoClickerCost *0.10)
      console.log(this.autoClickerCost)
    }

    autoClickAddsDonutsEverySecond(){
        this.donutCount = this.donutCount + (this.autoClickerCount * this.donutClickValue)
    }

    getDonutMultiplier(){
        this.donutMultiplierCount+=1;
        this.donutCount -= this.donutMultiplierCost;
    }

    returnDonutMultiplier(){
        return this.donutMultiplierCount;
    }
    increaseDonutmultiplier(){
        this.donutClickValue =  Math.pow(1.2, this.donutMultiplierCount)
      }

    increaseCostDonutmultiplier(){
        this.donutMultiplierCost +=(this.donutMultiplierCost * 0.10)
        return this.donutMultiplierCost   
    }
    
    getDonutMultiplierCost(){
       return this.donutMultiplierCost;
    }
}