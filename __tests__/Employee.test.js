const Employee = require("../lib/Employee.js");

const testEmployee = new Employee("Zaphod", 42, "beeble@brox.com");

test("Employee: getting name", () => {
	expect(testEmployee.getName()).toBe("Zaphod");
});

test("Employee: getting id", () => {
	expect(testEmployee.getId()).toBe(42);
});

test("Employee: getting email", () => {
	expect(testEmployee.getEmail()).toBe("beeble@brox.com");
});

test("Employee: getting role", () => {
	expect(testEmployee.getRole()).toBe("Employee");
});