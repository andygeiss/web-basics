document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("addCat").addEventListener("click", function (event) {
        parent.postMessage({
            name: "add item to cart",
            data: "cat",
        }, "*");
    })
});
