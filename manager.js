const Employee = require('./employee')

class Manager extends Employee {
  constructor(name, salary, title, manager, employees = []) {
    super(name, salary, title, manager)
    this.employees = employees
  }

  addEmployee(employee) {
    this.employees.push(employee)
  }

  calculateBonus(multiplier) {
    return (this.salary + this._totalSubSalary()) * multiplier
  }

  _totalSubSalary() {
    let sum = 0
    const employees = this.employees

    if (!(this instanceof Manager) || !employees) {
      sum += this.salary
      return sum
    }

    // base case
    if (employees.length === 0) return sum

    // current employee - last employee in the employees array
    let currentEmployee = employees[employees.length - 1]

    // test to see if the current employee has employees
    if (currentEmployee.employees) {
      // if they have employees, loop through the employees array and add each employee's salary to the sum
      currentEmployee.employees.forEach(el => {
        sum += el.salary
      })
      // then add the current employee's salary to the sum
      sum += currentEmployee.salary
    } else {
      // if the current employee does not have anymore employees add their salary to the sum
      sum += currentEmployee.salary
      return sum
    }

    // remove the current employee from the array
    employees.pop()

    return sum += this._totalSubSalary()
  }
}

splinter = new Manager('Splinter', 100000, 'Sensei');
leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
mikey = new Employee('Michelangelo', 85000, 'Grasshopper', leo);

console.log(mikey.calculateBonus(0.05)) //employee 4250
console.log(leo.calculateBonus(0.05)) //manager 8750
console.log(splinter.calculateBonus(0.05)) //manager 13750

try {
  module.exports = Manager
} catch {
  module.exports = null
}
