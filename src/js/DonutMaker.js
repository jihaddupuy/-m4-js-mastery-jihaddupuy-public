class DonutMaker {
    constructor(){
        this.donut = 0;
        this.autoClicker= 1;
    }
    
    getDonut(){
        return this.donut;
    }
    AddDonut(){
        this.donut += 1;
    }
    BuyAutoClicker(){
         this.donut++
        this.donut-=100;
        if (this.donut<0){
            this.donut=0;
        }

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


