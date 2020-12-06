async function getData() {
    let getJson = await fetch("javascripts/shop.json");
    let data = await getJson.json();

    let gridWrapper = document.getElementById('gridWrapper');





    for(let i = 0; i < data.mugs.length; i++){

        let gridContainer = document.createElement("div");
        gridContainer.setAttribute("id", "gridContainer");

        let itemName = document.createElement("h1");
        itemName.setAttribute("id", "itemName");
        itemName.innerText = data.mugs[i].name;

        let itemPicture = document.createElement("img");
        itemPicture.src = data.mugs[i].picture;
        itemPicture.setAttribute("id", "itemPicture");

        let value = document.createElement("h3");
        value.setAttribute("id", "value");
        value.innerText= "$" + data.mugs[i].value;

        let addToCart = document.createElement("button");
        addToCart.setAttribute("id", data.mugs[i].id);
        addToCart.textContent = "Add To Cart";
        addToCart.style.margin = "auto";

        gridWrapper.appendChild(gridContainer);
        gridContainer.appendChild(itemName);
        gridContainer.appendChild(itemPicture);
        gridContainer.appendChild(value);
        gridContainer.appendChild(addToCart);





    }
    

    
    





}

getData();