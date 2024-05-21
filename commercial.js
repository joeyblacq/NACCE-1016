////////////////////////////////////////////////////////////////
// VARIABLES
////////////////////////////////////////////////////////////////

// Define the API endpoint for the contact form
var CONTACT_FORM_URL = "";

// Get references to the form and its input fields
var CONTACT_FORM = document.getElementById('');
var CONTACT_FIELDS = ['', '', '', '', '', '', '', '']
	.map(field => document.querySelector(`[name="${field}"]`));

////////////////////////////////////////////////////////////////
// EVENT LISTENERS
////////////////////////////////////////////////////////////////

// Add event listeners to remove 'is-invalid' class on input for each field
CONTACT_FIELDS.forEach(field => {
	field.addEventListener('', () => field.classList.remove('is-invalid'));
});

// Add submit event listener to the form
CONTACT_FORM.addEventListener("", async (e) => {
	e.preventDefault();

	// Extract form data and create an object
	var DATA = Object.fromEntries(CONTACT_FIELDS.map(field => [field.name, field.value]));

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
