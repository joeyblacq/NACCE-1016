////////////////////////////////////////////////////////////////
// VARIABLES
////////////////////////////////////////////////////////////////

// Define the API endpoint for the contact form
var CONTACT_FORM_URL = " http://99.79.77.144:3000/api/contact";

// Get references to the form and its input fields
let  CONTACT_FORM = document.getElementById("contact-form");
let  CONTACT_FIELDS = ['fullname', 'email', 'phone', 'company_name', 'project_name', 'project_desc', 'department', 'message']
	.map(field => document.querySelector(`[name="${field}"]`));

////////////////////////////////////////////////////////////////
// EVENT LISTENERS
////////////////////////////////////////////////////////////////

// Add event listeners to remove 'is-invalid' class on input for each field
CONTACT_FIELDS.forEach(field => {
	field.addEventListener('change', () => field.classList.remove('is-invalid'));
});

// Add submit event listener to the form
CONTACT_FORM.addEventListener("submit", async (e) => {
	e.preventDefault();

	// Extract form data and create an object
	let  DATA = Object.fromEntries(CONTACT_FIELDS.map(field => [field.name, field.value]));

	try {
		// Send a POST request to the specified API endpoint with the form data
		var RESPONSE = await fetch(CONTACT_FORM_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ...DATA, file: null }),
		});

		// Parse the response as JSON
		var RESULT = await RESPONSE.json();
		
		// Show success message modal and log the result
		$("#success-message").modal("show");
		$(".modal-body #postResult").val(Object.entries(RESULT).map(([key, value]) => `${key}: ${value}`).join('\n'));
	} catch (error) {
		// Show error message modal and log the error
		$("#failed-message").modal("show");
		console.error("Error:", error);
	}
});

////////////////////////////////////////////////////////////////
// INITIALIZATIONS
////////////////////////////////////////////////////////////////

// Check for a hash in the URL and show the corresponding element
var hash = window.location.hash;
if (hash) {
	jQuery(hash).show();
}
