


// https://zara-server.herokuapp.com/products

async function search(){

   try{
    const res= await fetch('https://zara-server.herokuapp.com/products')
    let data= await res.json()
    console.log(data)
    
    appendData(data)
   }
   catch(err){
    console.log(err)
   }
}
search()


let localstorage_product=JSON.parse(localStorage.getItem("cart"))||[]
function appendData(data){
 data.forEach(function(el){


    let div_img=document.createElement("div")
    let div_price=document.createElement("div")

    let img=document.createElement("img")
    img.src=el.imgUrl
   
     img.addEventListener("click",function(){
        addToCard(el)
     })
    let price=document.createElement("p")
    price.innerText=el.price

    let product_name=document.createElement("p")
     product_name.innerText=el.prod_name
    

    // let btn=document.createElement("button")
    // btn.className="btn"
    // btn.innerText="ADD TO CARD"
    // btn.addEventListener("click",function(){
    //     addToCard(el)
    // })

     div_img.append(img,product_name ,price)
     
     document.querySelector("#outer_1").append(div_img)
    
    })

    function addToCard(el){
    console.log(el)
   
    localstorage_product.push(el)

    localStorage.setItem("cart",JSON.stringify(localstorage_product))
    window.location.href="cart.html"

    }
}

