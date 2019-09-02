
window.addEventListener("message", function (event) {
    let msg = event.data;
    if (msg.name === "add item to cart") {
        let items = document.getElementById("items");
        let item = document.createElement("span");
        item.innerText = msg.data;
        items.appendChild(item);
    }
}, false);
