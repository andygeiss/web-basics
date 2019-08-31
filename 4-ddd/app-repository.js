// Repository handles the data access.
class Repository {
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
