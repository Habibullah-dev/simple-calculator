

// User Interface Controller 
const uiController = (function() {
    let domItems = {
        inputValue : document.querySelector('.calculator_value'),
        result : document.querySelector('.calculator_result'),
        calculatorInput : document.querySelector('.calculator_input'),
        calculatorButtons : document.querySelector('.calculator_buttons'),
        calculatorInputScreen : document.querySelector('.calculator_input_screen'),
        calculateResultScreen : document.querySelector('.calculator_result'),
        equalButton : document.getElementById('equal')
        
    }
    return {
            getDomItems : domItems,
          
        }
    
})();

// Calculator CONTROLLER
const controller = (function(uiCtrl) {
    let resultScreen = uiCtrl.getDomItems.calculateResultScreen;
    let inputScreen = uiCtrl.getDomItems.calculatorInputScreen;
    let calcBtns = uiCtrl.getDomItems.calculatorButtons;
    let equalBtn = uiCtrl.getDomItems.equalButton;

    calcBtns.addEventListener('click' , (event) => {
       let targetId = event.target.id;
       let btnValue = event.target.dataset.num;
       if (btnValue) {
        inputScreen.value += btnValue;
       }
       if(targetId === 'delete') {
        let itemsAfterDelete = inputScreen.value.slice(0,-1);
        inputScreen.value = itemsAfterDelete;
       }
       if(targetId == 'clear') {
         inputScreen.value = "";
         resultScreen.textContent = "0";
       }
      
       if(targetId == 'percent') {
           let valueToCalculate = eval(inputScreen.value.slice(0,-1))/100;
           calculateResult(valueToCalculate);

       }
       
    });

    equalBtn.addEventListener('click',() => {
        calculateResult(inputScreen.value);
    })

    function calculateResult(input) {
        let result;
        try {
            result = eval(input);
        } catch (error) {
            if(error instanceof SyntaxError) {
                result = 'Syntax Error';
            }
        }
        resultScreen.textContent= result;
        return result
    }


})(uiController);







