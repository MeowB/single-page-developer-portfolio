
const submitButton = document.querySelector(`input[type="submit"]`)


submitButton.addEventListener("click", () => {
	event.preventDefault()
	const emailContent = document.querySelector(`input[type="email"]`).value
	const errorPresent = document.querySelector(".error-div");

	if (!isValidEmail(emailContent) && !errorPresent) {
		const errorDiv = document.createElement("div");
		const emailInput = document.querySelector(`input[type="email"]`)
		errorDiv.className = "error-div";
		errorDiv.innerHTML = `Sorry, invalid format here <i class="fa-solid fa-circle-exclamation" style="color: #ff7a7a;"></i>`;

		emailInput.insertAdjacentElement("afterend", errorDiv)

	}
})

function isValidEmail(email) {
	// Regular expression for validating email address
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	
	// Test the email against the regular expression
	return emailRegex.test(email);
}