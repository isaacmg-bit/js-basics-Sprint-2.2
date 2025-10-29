// Exercise 6

const validate = (event) => {
	event.preventDefault();

	const inputs = ["fName", "fEmail", "fAddress", "fLastN", "fPassword", "fPhone"];

	function inputGreen(element, errorElement) { 
  		element.style.borderWidth = "3px";
  		element.style.borderColor = "green";
		element.classList.remove("is-invalid");
		element.classList.add("is-valid");
		errorElement.style.display = "none";
	}

	function inputRed(element, errorElement) { 
  		element.style.borderWidth = "3px";
  		element.style.borderColor = "red";
		element.classList.remove("is-valid");
		element.classList.add("is-invalid");
		errorElement.style.display = "block";
	}

	const fName = document.getElementById("fName");
	const fEmail = document.getElementById("fEmail");
	const fLastN = document.getElementById("fLastN");
	const fPassword = document.getElementById("fPassword");
	const fPhone = document.getElementById("fPhone");
	const fAddress = document.getElementById("fAddress");

	const errorName = document.getElementById("errorName");
	const errorEmail = document.getElementById("errorEmail");
	const errorLastN = document.getElementById("errorLastN");
	const errorPassword = document.getElementById("errorPassword");
	const errorPhone = document.getElementById("errorPhone");
	const errorAddress = document.getElementById("errorAddress");

	let isValidName = false;
	let isValidAddress = false;
  	let isValidEmail = false;
  	let isValidLastN = false;
  	let isValidPassword = false;
  	let isValidPhone = false;

	if (/^[A-Za-z]{3,}$/.test(fName.value.trim())) {
		inputGreen(fName, errorName);
  		isValidName = true;
	} else {
		inputRed(fName, errorName);
		isValidName = false;
	};

	if (/^[A-Za-z]{3,}$/.test(fLastN.value.trim())) {
		inputGreen(fLastN, errorLastN);
  		isValidLastN = true;
	} else {
		inputRed(fLastN, errorLastN);
		isValidLastN = false;
	};

	if (/^[A-Za-z0-9]{4,8}$/.test(fPassword.value)) {
		inputGreen(fPassword, errorPassword);
		isValidPassword = true;
	} else {
		inputRed(fPassword, errorPassword);
		isValidPassword = false;
	};
	
	if (/^[A-Za-z0-9\s]{3,}$/.test(fAddress.value)) {
		inputGreen(fAddress, errorAddress);
		isValidAddress = true;
	} else {
		inputRed(fAddress, errorAddress);
		isValidAddress = false;
	};
	
	if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(fEmail.value)) {
		inputGreen(fEmail, errorEmail);
		isValidEmail = true;
	} else {
		inputRed(fEmail, errorEmail);
		isValidEmail = false;
	};

	if (/^[0-9]{9,}$/.test(fPhone.value)) {
		inputGreen(fPhone, errorPhone);
		isValidPhone = true;
	} else {
		inputRed(fPhone, errorPhone);
		isValidPhone = false;
	};

	if (isValidName && isValidLastN && isValidEmail && isValidPassword && isValidPhone && isValidAddress){
		alert("Form submitted successfully");
	} else {
		alert("Please fill in all required fields.");
	}
}
	 
