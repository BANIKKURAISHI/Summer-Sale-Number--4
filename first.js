let total =0;


function cardButton(Target){
const itemName=Target.childNodes[3].innerText
const li =document.createElement('li')
li.innerText=itemName
const list =document.getElementById("list")
list.appendChild(li)


const price5 =Target.childNodes[5].innerText.split(' ')[0];


total=parseFloat(total) + parseFloat(price5)


const totalAmount=document.getElementById('Total-price')
const totalAmountString =totalAmount.innerText
const totalAmountNumber =parseFloat(totalAmountString)
totalAmount.innerText =total


const button1=document.getElementById('Purchase-button')


if(total > 0){

  button1.removeAttribute('disabled')
}
else{
  button1.setAttribute('disabled')
}


}



document.getElementById('inputDelete').addEventListener('keyup',function(event){
  const text =event.target.value
  const button=document.getElementById('second-btn')
  const newText=document.getElementById('Total-price')
  const newTextString=newText.innerText
  const newTextNumber=parseFloat(newTextString) 

  if(text==='SELL200'&& newTextNumber>200){
    button.removeAttribute('disabled')
  }
  else{
    button.setAttribute('disabled',true)
  }
})




/*function unable(target){
  const button=document.getElementById('Purchase-button')
  const newText=document.getElementById('Total-price')
  const newTextString=newText.innerText
  const newTextNumber=parseFloat(newTextString) 
 
     if(newTextNumber < 0){
     button.disabled = true
     }
     else{
      button.disabled = false
     }

}*/




document.getElementById('Purchase-button').addEventListener('click',function(){

console.log('done')
})

/*let input=document.getElementById('Total-price')
let button =document.getElementById('Purchase-button')
input.addEventListener("change",able)

function able(){

if (document.getElementById('Total-price').innerText===''){
  button.disabled=true
}
else {
    button.disabled=false
}
}*/







/*function addition(inputId){
  const firstField=document.getElementById(inputId)
  const firstFieldString=firstField.innerText
  const firstFieldNumber=parseFloat(firstFieldString)
  return firstField
}*/


