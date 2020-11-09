const Engineer = require("../lib/Engineer.js");

const testEmployee = new Engineer("Zaphod", 42, "beeble@brox.com", "dadams");

test("Engineer: getting name", () => {
	expect(testEmployee.getName()).toBe("Zaphod");
});

test("Engineer: getting id", () => {
	expect(testEmployee.getId()).toBe(42);
});

test("Engineer: getting email", () => {
	expect(testEmployee.getEmail()).toBe("beeble@brox.com");
});

test("Engineer: getting role", () => {
	expect(testEmployee.getRole()).toBe("Engineer");
});