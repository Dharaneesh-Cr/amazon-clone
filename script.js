let images = ["banner1.jpg", "banner2.jpg", "banner3.jpg","banner4.jpg"];
let index = 0;

setInterval(() => {
    index = (index + 1) % images.length;
    document.getElementById("slide").src = images[index];
}, 3000);


function search(event){
    event.preventDefault()
    const product=document.getElementById("searchbar").value;
    console.log("Searching for ",product)
    alert("You searched for "+product)
    if(product.toLowerCase()=="laptop"){
        document.getElementsByClassName("title1")[0].scrollIntoView()
    }else if(product.toLowerCase()=="phone"){
        document.getElementsByClassName("title1")[2].scrollIntoView()
    }
    else{
        alert("Product not found")
    }
}

function addToOrders(button) {
    const productCard = button.parentElement;
    const product_img=productCard.querySelector("img").src;
    const productName = productCard.querySelector("p").innerText;
    const productPrice = productCard.querySelector("h2").innerText;
    const orderCard = document.createElement("div");
    orderCard.classList.add("order-card");
    orderCard.innerHTML = `
        <img src="${product_img}">
        <h3>${productName}</h3>
        <p>Price: ₹${productPrice}</p>
        <p>Status: Ordered ✅</p>
    `;
    document.getElementById("orders-container").appendChild(orderCard);
    const totalOrders = document.querySelectorAll(".order-card").length;
    document.getElementById("order-count").innerText = totalOrders;
    if (ordersContainer.children.length > 1) {
    emptyMessage.style.display = "none";
}
}
