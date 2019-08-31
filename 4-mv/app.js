// Model handles the data and the business logic.
class Model {
    constructor() {
        this.data = {
            name: "unknown"
        }
    }

    getName() {
        return this.data.name;
    }

    setName(name) {
        this.data.name = name;
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
            model.setName(name);
            view.render();
        })
    }

    render() {
        let root = document.getElementById("root");
        root.innerHTML = "Your name is " + this.model.getName();
    }
}

let model = new Model();
let view = new View(model);
view.init();
view.render();
