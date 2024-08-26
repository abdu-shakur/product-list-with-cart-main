const addToCart=document.querySelectorAll(".cartclick")


function addToCartU(){
    return addToCart.innerHTML;
}

numberOfClick=0
Array.from(addToCart).forEach(Cartdiv => {
    Cartdiv.addEventListener("click", (e)=>{
        Cartdiv.innerHTML = 
        `<div class="cartAdd">
            <img class="decrease" src="./assets/images/icon-decrement-quantity.svg">
            <div class="numVar">1</div>
            <img class="increase" src="./assets/images/icon-increment-quantity.svg">
        </div>`
        Cartdiv.classList.add("clicked")
        // e.preventDefault();
        
        
        let  incDiv=Cartdiv.querySelector(".increase")
        let numCartDiv=Cartdiv.querySelector(".numVar")
        let decDiv=Cartdiv.querySelector(".decrease")
        numberOfClick+=1
        document.querySelector(".numCarts").textContent = numberOfClick;
        incDiv.addEventListener("click", (e)=>{
            e.stopPropagation();
            let currentNumber = parseInt(numCartDiv.textContent, 10);
            numCartDiv.textContent = currentNumber + 1;
            currentNumber=1
            numberOfClick+=1;
            document.querySelector(".numCarts").textContent = numberOfClick;
        })


        decDiv.addEventListener("click", (e)=>{
            e.stopPropagation();
            let currentNumber = parseInt(numCartDiv.textContent, 10);
            if (currentNumber < 1){
                Cartdiv.innerHTML=addToCart;
            }else if (currentNumber>1){
                numCartDiv.textContent = currentNumber - 1;
                numberOfClick-=1;
                document.querySelector(".numCarts").textContent = numberOfClick;
            }
        Cartdiv.classList.add("clicked")
        })



        
    })
    console.log(numberOfClick);    
})
document.querySelector(".numCarts").textContent = numberOfClick;
