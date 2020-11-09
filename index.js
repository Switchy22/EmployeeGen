/*
	run: node index
	test: npm run test
*/

const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const generateHtml = require("./src/generateHtml.js");

const addAnotherEmployeeQ = [
	{
		name: "addAnotherEmployee",
		message: "Would you like to add an employee?",
		type: "confirm"
	}
];
const addEmployeeRoleQ = [
	{
		name: "employeeRole",
		message: "What's the role for this new employee?",
		type: "list",
		choices: ["Manager", "Engineer", "Intern"]
	}
];
const addEmployeeQ = [
	{
		name: "name",
		message: "Employee name:"
	},
	{
		name: "id",
		message: "Employee id:"
	},
	{
		name: "email",
		message: "Employee email:"
	}
];
const addManagerQ = [
	{
		name: "officeNumber",
		message: "Office number:"
	}
];
const addEngineerQ = [
	{
		name: "github",
		message: "Github:"
	}
];
const addInternQ = [
	{
		name: "school",
		message: "School:"
	}
];

const employees = [];

/******************************************************/

console.log("Welcome to Employee Viewer");
console.log("----------");
start();

function start(){
	inquirer.prompt(addAnotherEmployeeQ).then(answers => {
		if (answers.addAnotherEmployee) getEmployeeRole();
		else finish();
	});
}

function getEmployeeRole(){
	inquirer.prompt(addEmployeeRoleQ).then(answers => {
		switch (answers.employeeRole){
			case "Manager": addManager(); break;
			case "Engineer": addEngineer(); break;
			case "Intern": addIntern(); break;
		}
	});
}

function addManager(){
	let questions = addEmployeeQ.concat(addManagerQ);
	inquirer.prompt(questions).then(answers => {
		let employee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
		employees.push(employee);
		console.log(`${employee.getRole()} ${employee.getName()} added`);
		start();
	});
}

function addEngineer(){
	let questions = addEmployeeQ.concat(addEngineerQ);
	inquirer.prompt(questions).then(answers => {
		let employee = new Engineer(answers.name, answers.id, answers.email, answers.github);
		employees.push(employee);
		console.log(`${employee.getRole()} ${employee.getName()} added`);
		start();
	});
}

function addIntern(){
	let questions = addEmployeeQ.concat(addInternQ);
	inquirer.prompt(questions).then(answers => {
		let employee = new Intern(answers.name, answers.id, answers.email, answers.school);
		employees.push(employee);
		console.log(`${employee.getRole()} ${employee.getName()} added`);
		start();
	});
}

function finish(){
	let content = generateHtml(employees);
	fs.writeFile("./dist/employeeViewer.html", content, (err) => {
		if (err) console.error(err);
		else console.log("File created in dist folder");
		console.log("----------");
		console.log("Thank you for using Employee Viewer");
	});
}












