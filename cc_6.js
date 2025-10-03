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
const mgr2 = new Employee("Brian Davis", "Human Resources");
const mgr3 = new Employee("Carla Joseph", "IT");
const mgr4 = new Employee("David Angel", "Operations");
console.log(mgr.describe());

const emp1 = new Employee("Sophia Brown", "Finance");
const emp2 = new Employee("Michael Carter", "IT");
const emp3 = new Employee("Emma Davis", "Marketing");
const emp4 = new Employee("James Wilson", "Human Resources");
console.log(emp1.describe());

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
company.addEmployee(mgr2);
company.addEmployee(mgr3);
company.addEmployee(mgr4);

company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);
company.addEmployee(emp4);

company.listEmployees();