// Exercise 6
// añadir validacion 3 en lo regex

const validate = () => {
	const inputs = ["fName", "fEmail", "fAddress", "fLastN", "fPassword", "fPhone"];

	function inputGreen(element) { 
  		element.style.borderWidth = "3px";
  		element.style.borderColor = "green";
	}

	function inputRed(element) { 
  		element.style.borderWidth = "3px";
  		element.style.borderColor = "red";
	}

	const fName = document.getElementById("fName");
	const fEmail = document.getElementById("fEmail");
	const fLastN = document.getElementById("fLastN");
	const fPassword = document.getElementById("fPassword");
	const fPhone = document.getElementById("fPhone");
	const fAddress = document.getElementById("fAddress");

	let isValidInputs = true;
	let isValidName = false;
	let isValidAddress = false;
  	let isValidEmail = false;
  	let isValidLastN = false;
  	let isValidPassword = false;
  	let isValidPhone = false;

	// Val. campos vacíos
	inputs.forEach(id => {
		const inputElement = document.getElementById(id);
  		if (inputElement.value.trim() === "") {
    		isValidInputs = false;
			inputRed(inputElement); 
		} 
	});

	// Val. nombre solo letras
	if (/^[A-Za-z]+$/.test(fName.value.trim())) {
		inputGreen(fName);
  		isValidName = true;
	} else {
		inputRed(fName);
	};

	if (/^[A-Za-z]+$/.test(fLastN.value.trim())) {
		inputGreen(fLastN);
  		isValidLastN = true;
	} else {
		inputRed(fLastN);
	};

	if (/^[A-Za-z0-9]+$/.test(fPassword.value)) {
		inputGreen(fPassword);
		isValidPassword = true;
	} else {
		inputRed(fPassword);
	};
	
	if (/^[A-Za-z0-9]+$/.test(fAddress.value)) {
		inputGreen(fAddress);
		isValidAddress = true;
	} else {
		inputRed(fAddress);
	};
	
	// if(fEmail.value == ""){
	// 	error++;
	// }

	// if(fPhone.value == ""){
	// 	error++;
	// }
	
	// Validación submit
	 
	if(isValidInputs && isValidName && isValidLastN && isValidEmail && isValidPassword && isValidPhone && isValidAddress){
		alert("Form submitted successfully");
	}else {
		alert("Please fill in all required fields.");
	}
}
