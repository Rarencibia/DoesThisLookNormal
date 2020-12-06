async function getData() {
    let getJson = await fetch("javascripts/shop.json");
    let data = await getJson.json();

    let gridWrapper = document.getElementById('gridWrapper');







    for(let i = 0; i < data.inventory.length; i++){
        console.log(data.inventory[i].name);

        let gridContainer = document.createElement("div");
        gridContainer.setAttribute("id", "gridContainer");


        

        let itemName = document.createElement("h1");
        itemName.setAttribute("id", "itemName");
        itemName.innerText = data.inventory[i].name;

        let itemPicture = document.createElement("img");
        itemPicture.src = data.inventory[i].picture;
        itemPicture.setAttribute("id", "itemPicture");

        let value = document.createElement("h3");
        value.setAttribute("id", "value");
        value.innerText= "$" + data.inventory[i].value;

        let buttonContainer = document.createElement("div");
        buttonContainer.setAttribute("id", "buttonContainer");

        let addToCart = document.createElement("button");
        addToCart.setAttribute("id", data.inventory[i].id);
        addToCart.setAttribute("class", "shopButtons")
        addToCart.textContent = "Add To Cart";
        addToCart.style.margin = "auto";

        gridWrapper.appendChild(gridContainer);
        gridContainer.appendChild(itemName);
        gridContainer.appendChild(itemPicture);
        gridContainer.appendChild(value);
        gridContainer.appendChild(buttonContainer);
        buttonContainer.appendChild(addToCart);

                    

        
    


    }
    
    let theParent = document.getElementById("gridWrapper");
    theParent.addEventListener("click", (e) => {
        if(e.target !== e.currentTarget){
            var clickedItem = e.target.id
            alert("hello " + clickedItem);
        }
        e.stopPropagation();
    },false)





}

getData();