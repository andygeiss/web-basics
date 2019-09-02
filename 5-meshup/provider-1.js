document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("addX").addEventListener("click", function (event) {
        parent.postMessage({
            name: "add item to cart",
            data: "X",
        }, "*");
    })
});
