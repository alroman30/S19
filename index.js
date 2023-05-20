login()

function login() {
	username = prompt("Enter Username")
	password = prompt("Enter password")
	role = prompt("Enter role")
	if (username == null || password == null || role == null){
		alert("Input should not be empty!")
		login()
	}
	else{
		switch(role){
		case "admin": case "Admin":
			alert("Welcome back to the class portal, admin!")
			break;
		case "teacher": case "Teacher":
			alert("Thank you for logging in, teacher!")
			break;
		case "student": case "Student":
			alert("Welcome to the class portal, student!")
			break;
		default:
			alert("Role out of range.")
			break;
		}
	}
}

g1 = parseFloat(prompt("Enter grade 1"))
g2 = parseFloat(prompt("Enter grade 2"))
g3 = parseFloat(prompt("Enter grade 3"))
g4 = parseFloat(prompt("Enter grade 4"))
averageGrade(g1,g2,g3,g4)

function averageGrade(g1,g2,g3,g4){
	var average = (g1+g2+g3+g4)/4
	average = Math.round(average)
	console.log(average)
	if (average <= 74){
		console.log("Hello, student, your average is " + average + ". The letter equivalent is F.")
	}
	else if(average >= 75 && average <= 84){
		console.log("Hello, student, your average is " + average + ". The letter equivalent is C.")
	}
	else if(average >= 85 && average <= 89){
		console.log("Hello, student, your average is " + average + ". The letter equivalent is B.")
	}
	else if(average >= 90 && average <= 95){
		console.log("Hello, student, your average is " + average + ". The letter equivalent is A.")
	}
	else{
		console.log("Hello, student, your average is " + average + ". The letter equivalent is A+.")
	}
}