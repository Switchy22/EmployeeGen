function generateHtml(employees){
	let html = `
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<title>Employee Viewer</title>
	<style>
		body {
			margin: 0;
			font-family: sans-serif;
		}
		h1 {
			text-align: center;
			margin: 0;
			padding: 20px 0;
			background-color: navy;
			color: aliceblue;
		}
		h2 {
			border-bottom: 1px solid dimgrey;
		}
		p {
			text-align: left;
		}
		main {
			text-align: center;
		}
		section {
			display: inline-block;
			vertical-align: top;
			margin: 10px;
			padding: 15px;
			border-radius: 20px;
			border: 1px solid silver;
		}
		section.manager {
			background-color: honeydew;
		}
		section.engineer {
			background-color: lightgoldenrodyellow;
		}
		section.intern {
			background-color: lavenderblush;
		}
	</style>
</head>
<body>
	<header>
		<h1>Employee Viewer</h1>
	</header>
	<main>
	`;
	
	for (let employee of employees){
		let role = employee.getRole();
		let key, value;
		switch (role){
			case "Manager": key = "Office Number"; value = employee.getOfficeNumber(); break;
			case "Engineer": key = "Github"; value = employee.getGithub(); break;
			case "Intern": key = "School"; value = employee.getSchool(); break;
		}
		html += `
		<section class="${role.toLowerCase()}">
			<small>${role}</small>
			<h2>${employee.getName()}</h2>
			<p>Id: ${employee.getId()}</p>
			<p>Email: ${employee.getEmail()}</p>
			<p>${key}: ${value}</p>
		</section>
		`;
	}
	
	html += `
	</main>
</body>
</html>
	`;
	return html;
}

module.exports = generateHtml;