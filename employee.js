class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;

        if(manager !== null) {
            manager.addEmployee(this);
        }
    }
    calculateBonus(multiplier) {
        return this.salary * multiplier;
    }
}

x

module.exports = Employee;