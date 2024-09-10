"use strict";
////////////////////////////////////////////////////////////////
// VARIABLES
////////////////////////////////////////////////////////////////

// Set the DOM elements variables for divisions of steps 1 to 4
var DIV_STEP_1 = document.getElementById("");
var DIV_STEP_2 = document.getElementById("");
var DIV_STEP_3 = document.getElementById("");
var DIV_STEP_4 = document.getElementById("");

// Set the DOM element variable for building type dropdown of step 1
var SELECT_BUILDING_TYPE = document.getElementById("");

// Set the DOM element variable for the group of divisions of step 2 inputs
var DIV_NUMBER_OF_APARTMENT = document.getElementById("");
var DIV_MAXIMUM_OCCUPANCY = document.getElementById("");
var DIV_NUMBER_OF_FLOORS = document.getElementById("");
var DIV_NUMBER_OF_ELEVATORS = document.getElementById("");
var DIV_AMOUNT_ELEVATORS_NEEDED = document.getElementById("");

// Set the DOM element variable for inputs of step 2
var INPUT_NUMBER_OF_APARTMENT = DIV_NUMBER_OF_APARTMENT.querySelector("");
var INPUT_NUMBER_OF_FLOORS = DIV_NUMBER_OF_FLOORS.querySelector("");
var INPUT_MAXIMUM_OCCUPANCY = DIV_MAXIMUM_OCCUPANCY.querySelector("");
var INPUT_NUMBER_OF_ELEVATORS = DIV_NUMBER_OF_ELEVATORS.querySelector("");
var INPUT_AMOUNT_ELEVATORS_NEEDED = DIV_AMOUNT_ELEVATORS_NEEDED.querySelector("");

// Set the DOM element variable for group of radio buttons of step 3
var RADIO_BUTTONS_PRODUCT_LINE = document.getElementById("");

// Set the DOM element variable for radio buttons of step 3
var RADIO_BUTTON_STANDARD = document.getElementById("");
var RADIO_BUTTON_PREMIUM = document.getElementById("");
var RADIO_BUTTON_EXCELIUM = document.getElementById("");

// Set the DOM element variable for read-only inputs of step 4
var INPUT_ELEVATOR_UNIT_PRICE = document.getElementById("");
var INPUT_ELEVATOR_TOTAL_PRICE = document.getElementById("");
var INPUT_INSTALLATION_FEES = document.getElementById("");
var INPUT_TOTAL_COST = document.getElementById("");

// Set the object variable for elevator UNIT_PRICES
var UNIT_PRICES = { 
    standard: 0, 
    premium: 0, 
    excelium: 0
};

// Set the object variable for elevator INSTALLATION_PERCENT_FEES
var INSTALLATION_PERCENT_FEES = { 
    standard: 0, 
    premium: 0, 
    excelium: 0
};

////////////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////////////

// Function to hides steps 2 to 4 of the quote form
function hideSteps() {
    DIV_STEP_2.style.display = '';
    DIV_STEP_3.style.display = '';
    DIV_STEP_4.style.display = '';
}

// Function to shows steps 2 to 4 of the quote form
function showSteps() {
    DIV_STEP_2.style.display = '';
    DIV_STEP_3.style.display = '';
    DIV_STEP_4.style.display = '';
}

// Function to resets all values and radio buttons
function resetValues() {
    // Input values
    INPUT_NUMBER_OF_APARTMENT.value = '';
    INPUT_NUMBER_OF_FLOORS.value = '';
    INPUT_NUMBER_OF_ELEVATORS.value = '';
    INPUT_MAXIMUM_OCCUPANCY.value = '';
    INPUT_AMOUNT_ELEVATORS_NEEDED.value = '';
    INPUT_ELEVATOR_UNIT_PRICE.value = '';
    INPUT_ELEVATOR_TOTAL_PRICE.value = '';
    INPUT_INSTALLATION_FEES.value = '';
    INPUT_TOTAL_COST.value = '';
    // Radio buttons
    RADIO_BUTTON_STANDARD.checked = false;
    RADIO_BUTTON_PREMIUM.checked = false;
    RADIO_BUTTON_EXCELIUM.checked = false;
}

// Function to shows/hides fields depending on the building type
function showHideFieldOnBuildingType() {
    // Call the function to hide all steps
    
    
    // Call the function to reset all values
    
    
    if (SELECT_BUILDING_TYPE.value !== '---Select---') {
        // Call the function to show all steps
        

        // Set variables depending on the building type
        var displayResidential = SELECT_BUILDING_TYPE.value === "";
        var displayCommercial = SELECT_BUILDING_TYPE.value === "";
        var displayIndustrial = SELECT_BUILDING_TYPE.value === "";

        // Display fields depending on the building type
        DIV_NUMBER_OF_APARTMENT.style.display = displayResidential ? 'block' : 'none';
        DIV_NUMBER_OF_FLOORS.style.display = displayCommercial || displayResidential ? 'block' : 'none';
        DIV_MAXIMUM_OCCUPANCY.style.display = displayCommercial ? 'block' : 'none';
        DIV_NUMBER_OF_ELEVATORS.style.display = displayIndustrial ? 'block' : 'none';
    }
}

// Functions that calculate the amount of elevators needed depending on the building type
function calculateElevatorsNeeded() {
    var selectedBuildingType = SELECT_BUILDING_TYPE.value;
    var elevatorsNeeded = '';

    // Check if the residential building type is selected and its fields are filled
    if (selectedBuildingType === "" && INPUT_NUMBER_OF_FLOORS.value && INPUT_NUMBER_OF_APARTMENT.value) {
        elevatorsNeeded = calculateResidentialElevators(INPUT_NUMBER_OF_FLOORS.value, INPUT_NUMBER_OF_APARTMENT.value);
    }

    // Check if the commercial building type is selected and its fields are filled
    else if (selectedBuildingType === "" && INPUT_NUMBER_OF_FLOORS.value && INPUT_MAXIMUM_OCCUPANCY.value) {
        elevatorsNeeded = calculateCommercialElevators(INPUT_NUMBER_OF_FLOORS.value, INPUT_MAXIMUM_OCCUPANCY.value);
    }

    // Check if the industrial building type is selected and its field is filled
    else if (selectedBuildingType === "" && INPUT_NUMBER_OF_ELEVATORS.value) {
        elevatorsNeeded = calculateIndustrialElevators(INPUT_NUMBER_OF_ELEVATORS.value);
    }

    // Set the calculated elevators needed value or empty string
    INPUT_AMOUNT_ELEVATORS_NEEDED.value = elevatorsNeeded;

    // Call function that calculates the total cost
    calculateTotalCost(elevatorsNeeded);
}

// Functions that calculate the amount of elevators needed for residential buildings
function calculateResidentialElevators() {
    // Set the varialbe of the average apartment per floor
    var variable = Math.ceil(variable / variable);
    
    // Set the varialbe of the amount of elevators needed
    var variable = Math.ceil(variable / 0);

    // Set the varialbe of the amount of elevators bank
    var variable = Math.ceil(variable / 0);

    // Return the total amount of elevators
    return variable * variable;
}

// Functions that calculate the amount of elevators needed for commercial buildings
function calculateCommercialElevators() {
    // Set the varialbe of the total number of occupants
    var variable = Math.ceil(variable * variable)

    // Set the varialbe of the amount of elevators required per bank
    var variable = Math.ceil(variable / 0);

    // Set the varialbe of the amount of elevators bank
    var variable = Math.ceil(variable / 0);

    // Set the varialbe of the total amount of elevators required per bank
    var variable = variable * variable

    // Set the varialbe of the amount of additional elevators for freight
    var variable = Math.ceil(variable / 0);

    // Return the total amount of elevators
    return variable + variable
}

// Functions that return the amount of elevators needed for industrial buildings
function calculateIndustrialElevators() {
    return numberOfElevators;
}

// Function that calculates the installation fees
function calculateInstallationFees() {
    return Number(totalPrice) * Number(installationPercentFees);
}

// Function that calculates the total cost
function calculateTotalCost() {
    // Set empty variables to be used in this function
    var unitPrice;
    var totalElevatorPrice;
    var installationFees;
    var totalCost;

    // if statement to check if the radio buttons are not checked and set values to 0
    if (!RADIO_BUTTON_STANDARD.checked && !RADIO_BUTTON_PREMIUM.checked && !RADIO_BUTTON_EXCELIUM.checked) {
        variable = 0; variable = 0; variable = 0; variable = 0;
    }
    
    // if statement to check if the standard radio buttons is checked and set values
    if (RADIO_BUTTON_STANDARD.checked) {
        unitPrice = UNIT_PRICES.standard;
        totalElevatorPrice = amountElevatorsNeeded * variable;
        installationFees = calculateInstallationFees(variable, INSTALLATION_PERCENT_FEES.standard);
        totalCost = variable + variable;
    }

    // if statement to check if the premium radio buttons is checked and set values
    if (RADIO_BUTTON_PREMIUM.checked) {
        unitPrice = UNIT_PRICES.premium;
        totalElevatorPrice = amountElevatorsNeeded * variable;
        installationFees = calculateInstallationFees(variable, INSTALLATION_PERCENT_FEES.premium);
        totalCost = variable + variable;
    }

    // if statement to check if the excelium radio buttons is checked and set values
    if (RADIO_BUTTON_EXCELIUM.checked) {
        unitPrice = UNIT_PRICES.excelium;
        totalElevatorPrice = amountElevatorsNeeded * variable;
        installationFees = calculateInstallationFees(variable, INSTALLATION_PERCENT_FEES.excelium);
        totalCost = variable + variable;
    }

    // Define function to format currency
    var formatCurrency = (amount) => new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(amount);

    // Set read-only inputs with the calculated values using the formatCurrency function
    INPUT_ELEVATOR_UNIT_PRICE.value = formatCurrency(variable);
    INPUT_ELEVATOR_TOTAL_PRICE.value = formatCurrency(variable);
    INPUT_INSTALLATION_FEES.value = formatCurrency(variable);
    INPUT_TOTAL_COST.value = formatCurrency(variable);
}

////////////////////////////////////////////////////////////////
// EVENT LISTENERS
////////////////////////////////////////////////////////////////

// Set up event listeners for changes in the building type selection (dropdown) and trigger the function showHideFieldOnBuildingType when a change occurs.
SELECT_BUILDING_TYPE.addEventListener("", showHideFieldOnBuildingType);

// Set up event listeners for input changes in step 2 fields to trigger the function calculateElevatorsNeeded.
DIV_STEP_2.addEventListener('', calculateElevatorsNeeded)

// Set up event listeners for changes in radio button selections within the product line to trigger the function calculateElevatorsNeeded.
RADIO_BUTTONS_PRODUCT_LINE.addEventListener('', calculateElevatorsNeeded)

////////////////////////////////////////////////////////////////
// INITIALIZATIONS
////////////////////////////////////////////////////////////////

// Call the function to hide all steps
hideSteps();

// Call the function to reset all values
resetValues();

// Set the default value of the building type
SELECT_BUILDING_TYPE.value = "---Select---";