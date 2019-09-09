
window.addEventListener("message", function (event) {
    let msg = event.data;
    if (msg.name === "add item to cart") {
        let items = document.getElementById("items");
        let item = document.createElement("button");
        item.innerText = msg.data;
        item.className = msg.data;
        items.appendChild(item);
    }
}, false);
