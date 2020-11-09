const Manager = require("../lib/Manager.js");

const testEmployee = new Manager("Zaphod", 42, "beeble@brox.com", 5);

test("Manager: getting name", () => {
	expect(testEmployee.getName()).toBe("Zaphod");
});

test("Manager: getting id", () => {
	expect(testEmployee.getId()).toBe(42);
});

test("Manager: getting email", () => {
	expect(testEmployee.getEmail()).toBe("beeble@brox.com");
});

test("Manager: getting role", () => {
	expect(testEmployee.getRole()).toBe("Manager");
});