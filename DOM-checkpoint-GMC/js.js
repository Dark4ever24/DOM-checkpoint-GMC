
///declaration of html elements

let btn = document.querySelectorAll(".btnplus");

let btnm = document.querySelectorAll(".btnminus");

let qte = document.querySelectorAll(".qte");
/////



let totalPrice = document.getElementById("totalPrice");

let price = document.querySelectorAll(".price");

let prices = []
for (let i=0; i < price.length; i++)
{
  prices.push (price[i].innerHTML)
}


for (let i = 0; i <= btn.length -1; i++) {
  btn[i].addEventListener("click", function () {
   
    
    
    qte[i].innerHTML++
    
    price[i].innerHTML = "$"+ +prices[i].replace("$","") * +qte[i].innerHTML
    
  
    total()
  });
}



for (let i = 0; i <= btnm.length -1; i++) {


    btnm[i].addEventListener("click", function () {
  
    
    if(qte[i].innerHTML>1){
    
        qte[i].innerHTML--
    
        price[i].innerHTML = "$"+ +prices[i].replace("$","") * +qte[i].innerHTML
    }
 
  total()
  });
}






function total() {
  let qte = document.querySelectorAll(".qte")


  let price = document.querySelectorAll(".price")
  
  
  let sum = 0
  
  
  for (let i=0; i < price.length; i++) {
  
    sum = sum + price[i].innerHTML.replace("$","") * qte[i].innerHTML;
}
  totalPrice.innerHTML = "$" + sum
  
}
total()