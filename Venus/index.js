let search = document.querySelector(".search-box");
let cart = document.querySelector(".cart");
let user = document.querySelector(".user");
let navbar = document.querySelector(".navbar");
let closeWindow=document.querySelector(".bx-window-close")
// search
document.querySelector("#search-icon").onclick=()=>{
    search.classList.toggle("active")
    user.classList.remove("active")
    cart.classList.remove("active")
    navbar.classList.remove("active")


}
// cart
document.querySelector("#cart-icon").onclick=()=>{
    cart.classList.toggle("active")
    search.classList.remove("active")
    user.classList.remove("active")
    navbar.classList.remove("active")

}

// user
document.querySelector("#user-icon").onclick=()=>{
    user.classList.toggle("active")
    search.classList.remove("active")
    cart.classList.remove("active")
    navbar.classList.remove("active")
}
// navbar
document.querySelector("#menu-icon").onclick=()=>{
    navbar.classList.toggle("active")
    search.classList.remove("active")
    cart.classList.remove("active")
    user.classList.remove("active")
}
document.querySelector("#close").onclick=()=>{
cart.classList.remove("active")
}
window.onscroll=()=>{
    search.classList.remove("active")
    //cart.classList.remove("active")
    user.classList.remove("active")
    navbar.classList.remove("active")
}
// cart js
if(document.readyState=="loading"){
    document.addEventListener("DOMContentLoaded",ready);
}else{
    ready();
}

function ready() {
    let removeItemBtn = document.getElementsByClassName("bxs-trash");

    for (let i = 0; i < removeItemBtn.length; i++) {
        let myButton = removeItemBtn[i];
        myButton.addEventListener("click", removeCartItem);
    }

    let quantityInput = document.getElementsByClassName("cart-quantity");
    for (let i = 0; i < quantityInput.length; i++) {
        let input = quantityInput[i];
        input.addEventListener("change", quantityChange);
    }

    let addToCart = document.getElementsByClassName("bxs-cart-add");
    for (let i = 0; i < addToCart.length; i++) {
        let buttonCart = addToCart[i]
        buttonCart.addEventListener("click", addCartClicked);
    }

    let buyButton = document.getElementsByClassName("btn")[0];
    if (addToCart.length < 1) {
        buyButton.textContent = "Select an item to buy";
    } else {
        buyButton.textContent = "Buy";
    }

    updateTotal();
    document.getElementsByClassName("btn")[0].addEventListener("click",buyBtnClick);
}

// Rest of your code...

//buybtn



//buybtn
function buyBtnClick(){
    alert("Your order is placed and will be processed soon!");
    let cartContent=document.getElementsByClassName("cart-content")[0];
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
        
    }

}
//remove item from cart
function removeCartItem(event){
    let buttonClicked=event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}
// quantity change
function quantityChange(event){
 let input=event.target;
 if(isNaN(input.value) || input.value<=0){
    input.value=1;
    document.getElementsByClassName("final-price")[0].innerText="KSh " + cartBox
    .getElementsByClassName("price")[0];
 }
 updateTotal();
}

//add to cart

function addCartClicked(event) {
    let buyButton=document.getElementsByClassName("btn");
    if(addItemToCart.length<1){
        buyButton.textContent="Select an item"
    }
    let buttonCart = event.target;
    let shopProducts = buttonCart.parentElement;
    let title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    let price = shopProducts.getElementsByClassName("price")[0].innerText;
    let productImage = shopProducts.getElementsByClassName("product-img")[0].src;
    addItemToCart(title, price, productImage);
  

    updateTotal();
}

function addItemToCart(title, price, productImage) {
    let cartShopBox = document.createElement("div");
    cartShopBox.classList.add("box");
    let cartItems = document.querySelector(".cart-content"); // Use querySelector instead of getElementsByClassName
    let cartItemsNames = cartItems.querySelectorAll(".cart-product-title");
    for (let i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText === title) {
            alert("You have already added this item to the cart!");
            return;
        }
    }

    let cartBoxContent = `
        <img src="${productImage}" alt="${title}">
        <div class="text">
            <div class="cart-product-title">${title}</div>
            <div class="price">${price}</div>
            <input type="number" value="1" min="1" class="cart-quantity"/>
        </div>
        <i class='bx bxs-trash'></i>
        
    `;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.appendChild(cartShopBox); // Use appendChild instead of append
    cartShopBox.querySelector(".bxs-trash").addEventListener("click", removeCartItem);
    cartShopBox.querySelector(".cart-quantity").addEventListener("change", quantityChange);
}

// price update
function updateTotal(){
  let cartContent = document.getElementsByClassName("cart")[0];
  let cartBoxes=cartContent.getElementsByClassName("box");
  let total=0;
  for(let i=0;i<cartBoxes.length;i++){
    let cartBox=cartBoxes[i];
    let priceElement=cartBox.getElementsByClassName("price")[0];
    let quantityElement=cartBox.getElementsByClassName("cart-quantity")[0];
    let price=parseFloat(priceElement.innerText.replace("KSh",""));
    let quantity=quantityElement.value; 
   
    total=total+(price*quantity);
  }

    document.getElementsByClassName("final-price")[0].innerText="KSh " + total.toFixed(2);

  
}
const date = new Date();
const footer=document.getElementById("footer");
const year=date.getFullYear();
footer.textContent=`Copyright © ${year} Deco`




