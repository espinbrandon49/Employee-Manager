class Employee {
    constructor(name, salary, title, manager) {
        this.name = name
        this.salary = salary
        this.title = title
        this.manager = manager
        if (manager) {
            manager.addEmployee(name)
        }
    }
}

// Make sure the manager exsist
// If the manager exsist, want to call addEmployee() when we create an employee
// Call addEmployee inside of the contructor body
/* if (manager exsist) call addEmployee(this.manager) will run and push the manager to the 
specified managers array, dont need to have another statement because manager is already
sent to null.
*/


try {
    module.exports = Employee
} catch {
    module.exports = null
}