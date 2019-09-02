document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("addY").addEventListener("click", function (event) {
        parent.postMessage({
            name: "add item to cart",
            data: "Y",
        }, "*");
    })
});
