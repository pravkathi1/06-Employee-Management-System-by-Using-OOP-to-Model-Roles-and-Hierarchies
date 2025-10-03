class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in ${this.department}`;
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  describe() {
    return `${this.name} manages a team of ${this.teamSize} in ${this.department}`;
  }
}

const mgr = new Manager("Pravallika Kathi", "Sales", 8);

const emp1 = new Employee("Sophia Brown", "Finance");
const emp2 = new Employee("Michael Carter", "Sales");
class Company {
  constructor() {
    this.employees = []; 
  }

  addEmployee(employee) { 
    this.employees.push(employee);
  }

  listEmployees() {
    this.employees.forEach(emp => {
      console.log(emp.describe());
    });
  }
}

const company = new Company();


company.addEmployee(mgr);

company.addEmployee(emp1);
company.addEmployee(emp2);

company.listEmployees();