
document.getElementById('second-btn').addEventListener('click',function(){
 
    const discount=20
    const totalAmount=document.getElementById('Total-price')
    const totalAmountString =totalAmount.innerText
    const totalAmountNumber =parseFloat(totalAmountString)
    
    const discountAmount =discount*totalAmountNumber/100
    
    const number =document.getElementById('Discount')
    const numberString =number.innerText
    const numberValue =parseFloat(numberString)
    
    number.innerText=discountAmount
    
    //// Total calculation with discount 
    const newAmount =totalAmountNumber - discountAmount
     
    const final=document.getElementById('total')
    const finalString=final.innerText
    const finalNumber =parseFloat(finalString)
    
    final.innerText=newAmount
      
    }); 