var elForm = document.querySelector(".form");
elBody = document.querySelector('body');
elInput = document.querySelector(".temperature__input")
elInput2 = document.querySelector(".second__input")


elForm.addEventListener("submit", function(evt){
  evt.preventDefault()
})

// if(temperature = 10 && temperature<=20){
//   elBody.
// }



elInput.addEventListener("change", function(){

  
  var inputValue = elInput.value.trim();
  elBody.style.backgroundColor = inputValue;

  

  if(inputValue >= 1 && inputValue <= 19){
    elBody.style.backgroundColor = "yellow";
  }else
    elBody.style.backgroundColor = "red";

    var input2Value = elInput2.value.trim();
    input2Value = inputValue;
});

elInput.oninput = function(){
  var output = (elInput.value)*9 / 5 + 32;
  elInput2.value = parseFloat(output.toFixed(2));
}

