// Model handles the data and the business logic.
class Model {
    constructor() {
        this.data = {
            name: "unknown"
        }
    }

    get(attr) {
        return this.data[attr];
    }

    set(attr, value) {
        this.data[attr] = value;
    }
}

// View handles the user-interaction and presentation.
class View {
    constructor(model) {
        this.model = model;
    }

    init() {
        let txtInput = document.getElementById("txtInput");
        let view = this;
        let model = this.model;
        txtInput.addEventListener("keyup", function () {
            let name = document.getElementById("txtInput").value;
            model.set("name", name);
            view.render();
        })
    }

    render() {
        let model = this.model;
        let root = document.getElementById("root");
        root.innerHTML = "Your name is " + model.get("name");
    }
}

let model = new Model();
let view = new View(model);
view.init();
view.render();
