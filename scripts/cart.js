


let products=JSON.parse(localStorage.getItem("cart"))||[]

 document.getElementById("total_prodcut").innerText="Total Card"+ " -"+products.length
let total=products.reduce(function(sum,el){
     return  sum+Number(el.price)
},0)
document.getElementById("total_price").innerText="₹"+" "+ total
// document.getElementById("total_price_h2").innerText= "Total Payment" + " "+ "₹"+" "+ total
products.map(function(el,index){


    let div_img=document.createElement("div")
   

    let img=document.createElement("img")
    img.src=el.imgUrl
    let price=document.createElement("p")
    price.innerText=el.price
    let prod_name=document.createElement("p")
    prod_name.innerHTML=el.prod_name
    
    let btn =document.createElement("button")
    btn.innerText="Delete"
    btn.addEventListener("click",function(){
        deleteData(el,index)
    })

    
   

    div_img.append(img,prod_name,price,btn)
    

    document.getElementById("con").append(div_img)
  
    function deleteData(el,index){
        console.log(el)
        products.splice(index,1)
        localStorage.setItem("cart",JSON.stringify(products))
        window.location.reload();
    }
})
