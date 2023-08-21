let total =0;


function cardButton(Target){
const itemName=Target.childNodes[3].innerText
const li =document.createElement('li')
li.innerText=itemName
const list =document.getElementById("list")
list.appendChild(li)


const price5 =Target.childNodes[5].innerText.split(' ')[0];


total=parseFloat(total) + parseFloat(price5)
  ///total amount displayed
const newTotal =document.getElementById('total')
const newTotalString =newTotal.innerText
const newTotalNumber =parseFloat(newTotalString)
newTotal.innerText=total



const totalAmount=document.getElementById('Total-price')
const totalAmountString =totalAmount.innerText
const totalAmountNumber =parseFloat(totalAmountString)
totalAmount.innerText =total
 
const coupon =document.getElementById('inputDelete')
const button1=document.getElementById('Purchase-button')
const button=document.getElementById('second-btn')
if(total > 0){

  button1.removeAttribute('disabled')
  if(total > 200){
    button.removeAttribute('disabled')
    
  }
  else{
    button.setAttribute('disabled')
    
  }
  
}
else{
  button1.setAttribute('disabled')
  
}
}








function windows(){
  const newWindow =document.getElementById('last-btn')
  newWindow=window.location.href="index.html"

}




















