const donutCountElement = document.querySelector('.donut_Count_Display');
const purchaseAutoClickerElement = document.querySelector('.autoClicker_Dount_Display');
const purchaseDonutMutiplierElement = document.querySelector('.donut_Mutiplier_Display');

const addDonutClickButton = document.querySelector('.donut_Click_button')
const purchaseAutoClickerButton = document.querySelector('.purchase_Auto_Clicker-Button')
const purchaseDonutMutiplierButton = document.querySelector('.purchase_Donut_Multipler')

const donutMaker = new DonutMaker();

//let isDonutCounterActive = false;
//let intervaralId =null;

// update donut count Display
const updateDonutCountDisplay = function(){
    donutCountElement.innerText = donutMaker.getDonutCount();
}

// update auto click count display
const updateAutoClickerCountDisplay = function(){
 purchaseAutoClickerElement.innerText = donutMaker.getAutoClickerCount();
}

// update donut Multipler count display
const updateDonutMultiplerDisplay = function(){
    purchaseDonutMutiplierElement.innerText = donutMaker.returnDonutMultiplier();
}

// add eventListener to Donut Click button
addDonutClickButton.addEventListener("click",function(){
    donutMaker.addDonut();
    
    updateDonutCountDisplay();

})
// add eventlistener to Purchase auto clicker button
purchaseAutoClickerButton.addEventListener("click",function(){
    donutMaker.purchaseAutoClicker();

    updateAutoClickerCountDisplay();

})
// add event listerer to purchase donut multiplier button
purchaseDonutMutiplierButton.addEventListener("click",function(){
    donutMaker.getDonutMultiplier();

    updateDonutMultiplerDisplay();


})

updateDonutCountDisplay();
 updateAutoClickerCount();
 updateDonutMultiplerDisplay();
