class Employee {
    constructor() {
        var name;
        var rating;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    getRating() {
        return this.rating;
    }
    setRating(rating) {
        this.rating = rating;
    }
}
// bagian instansiasi
var emp = new Employee();
emp.setName('NARENDRA');
emp.setRating('5 Bintang');
console.info(emp.getName() + ' ' + emp.getRating());
