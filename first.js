function cardButton(Target){
const itemName=Target.childNodes[3].innerText
const li =document.createElement('li')
li.innerText=itemName
const list =document.getElementById("list")
list.appendChild(li)


const price =Target.childNodes[5].innerText
console.log(price)

}

function addition(inputId){
  const firstField=document.getElementById(inputId)
  const firstFieldString=firstField.innerText
  const firstFieldNumber=parseFloat(firstFieldString)
  return firstField
}
