//
const varifySuccess1 = document.getElementById('varify-success');
const varifyFailed1 = document.getElementById('varify-failed');
varifySuccess1.style.display =  'none';
varifyFailed1.style.display =  'none';

        //calc
        const display = document.getElementById('display');
            function appendToDisplay(input) {
                display.value += input;
            };

          function clearDisplay(){
            display.value = "";
          }  

          function backSpace(){
            display.value = display.value.slice(0,-1);
          }
          //generate 
          function getPin(){
            const Pin = generatePin();
          const getString = Pin + '';
          if (getString.length === 4) {
            return Pin;
          } else {
            return getPin();
          }
          };
         
        function generatePin(){
            const random = Math.round(Math.random()*10000);
                return random;
        };
//generate pin showcase
document.getElementById('generateBtn').addEventListener('click',function(){
    const pin = getPin();
    const pinShow = document.getElementById('PinShow');
    pinShow.value = pin;
}); 
//checking if it is ok
document.getElementById('varify-pin').addEventListener('click',function(){
const displayTypePin = document.getElementById('display');
const displayTypePinFinal = displayTypePin.value;

const displayGenPin = document.getElementById('PinShow');
const displayGenPinFinal = displayGenPin.value;

const varifySuccess = document.getElementById('varify-success');
const varifyFailed = document.getElementById('varify-failed');

if (displayTypePinFinal == displayGenPinFinal) {
  varifySuccess.style.display = 'block';
  varifyFailed.style.display = 'none';
} else {
  varifySuccess.style.display = 'none';
  varifyFailed.style.display = 'block';

  // let wrongAttemts = 0;
  // const tryMe = document.getElementById('tryAgain');

  // if(wrongAttemts === 3){

  // }
}

});
  