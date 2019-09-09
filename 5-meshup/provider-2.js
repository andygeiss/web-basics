document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("addDog").addEventListener("click", function (event) {
        parent.postMessage({
            name: "add item to cart",
            data: "dog",
        }, "*");
    })
});
