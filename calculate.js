
document.getElementById('second-btn').addEventListener('click',function(){
    const coupon =document.getElementById('inputDelete')
    const coupon2=coupon.value
    console.log (coupon2)
    if(coupon2==='SELL200'){
             
    }
    else{
        return
    }
    const discount=parseFloat(20 )

    
    const totalAmount=document.getElementById('Total-price')
    const totalAmountString =totalAmount.innerText
    const totalAmountNumber =parseFloat(totalAmountString)
      
  
  
    
    const discountAmount =discount*totalAmountNumber/100  
    
    const number =document.getElementById('Discount')
    const numberString =number.innerText
    const numberValue =parseFloat(numberString)
    number.innerText=discountAmount
    const newAmount =total -discountAmount 

    
    // Total calculation with discount 
    
     
    const final=document.getElementById('total')
    const finalString=final.innerText
    const finalNumber =parseFloat(finalString)
    
   

  
    final.innerText=newAmount
      
    }); 

   
  
 


      