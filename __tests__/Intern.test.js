const Intern = require("../lib/Intern.js");

const testEmployee = new Intern("Zaphod", 42, "beeble@brox.com", "Dadams U");

test("Intern: getting name", () => {
	expect(testEmployee.getName()).toBe("Zaphod");
});

test("Intern: getting id", () => {
	expect(testEmployee.getId()).toBe(42);
});

test("Intern: getting email", () => {
	expect(testEmployee.getEmail()).toBe("beeble@brox.com");
});

test("Intern: getting role", () => {
	expect(testEmployee.getRole()).toBe("Intern");
});