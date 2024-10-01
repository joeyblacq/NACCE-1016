////////////////////////////////////////////////////////////////
// VARIABLES
////////////////////////////////////////////////////////////////

// Set a constant threshold for agent ratings
const  AGENT_RATING = 95;

// Initialize an array to store agent data
const agentData = [];

// Define the API endpoint for fetching agents list
const AGENTS_LIST_URL = "http://99.79.77.144:3000/api/agents";

// Get references to HTML elements for table head, table body, and region type select

const AGENT_TABLE_HEAD = document.getElementById("AGENT_TABLE_HEAD");
let AGENT_TABLE_BODY = document.getElementById("AGENT_TABLE_BODY");
let REGION_TYPE_SELECT = document.getElementById("REGION_TYPE_SELECT");

// Get references to all buttons in the table head 

var tableButtons = document.querySelectorAll('th button');

////////////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////////////

// Function to render the table body based on agent ratings and selected region
function renderBodyTable(agentData) {
  AGENT_TABLE_HEAD.style.backgroundColor = "#A94545";

  let rowNumber = 1;

  // Assuming you've fetched the agent data and stored it in the `agentData` array

  // Clear the table body before rendering new data
  AGENT_TABLE_BODY.innerHTML = "";

    let tableBody = "";

  for (const agent of agentData) {
    if (
      agent.rating >= AGENT_RATING &&
      (region === "all" || agent.region === region)
    ) {
      const row = `
        <tr>
          <td>${rowNumber++}</td>
          <td>${agent.first_name}</td>
          <td>${agent.last_name}</td>
          <td>${agent.fee}</td>  <td>${agent.rating}</td>
          <td>${agent.region}</td>
        </tr>`;
      AGENT_TABLE_BODY.innerHTML += AGENT_TABLE_BODY;
    }
  }

  // Display a message if no agents are found after filtering
  AGENT_TABLE_BODY.innerHTML = row || "NO AGENT FOUND";
}

////////////////////////////////////////////////////////////////
// EVENT LISTENERS
////////////////////////////////////////////////////////////////

// Event listener for changes in the region type select dropdown
REGION_TYPE_SELECT.addEventListener('', () => {
  let REGION_TYPE = REGION_TYPE_SELECT.value;
  renderBodyTable(agentData, REGION_TYPE);
});

// Event listeners for sorting table columns by clicking on column headers

  tableButtons.forEach((button) => {

    let  isCorrectDirection = true;
    let  REGION_TYPE = REGION_TYPE_SELECT.value;
    button.addEventListener('click', () => {

    const  BUTTON_ID = button.id;

    // Sort agent data based on the selected column
      agentData.sort((a, b) => {
      const compareValue = (prop) =>
        (isCorrectDirection ? a[prop] < b[prop] : a[prop] > b[prop]) ? -1 : 1;

      if (BUTTON_ID === 'first_name') return compareValue('first_name');
      if (BUTTON_ID === 'last_name') return compareValue('last_name');
      if (BUTTON_ID === 'fee') return compareValue('fee');
      if (BUTTON_ID === 'rating') return compareValue('rating');
    });

    // Render the table with the sorted data
    renderBodyTable(agentData, REGION_TYPE);
    isCorrectDirection = !isCorrectDirection;
  });
});

////////////////////////////////////////////////////////////////
// INITIALIZATIONS
////////////////////////////////////////////////////////////////

// On window load, fetch agent data and render the table for all regions

window.onload = async () => {

    try {
      // Existing functionality: Fetch agent data and render table

      const RESPONSE = await fetch(AGENTS_LIST_URL);

        if(!RESPONSE.ok) {
          throw new Error(`HTTP error! status: ${RESPONSE.status}`);
    }

      let agentData = await RESPONSE.json();
      renderBodyTable(agentData, "all");
    } catch (error) {
      console.error("Error fetching agent data:", error);
    }
  };
      window.onload = () => {

  // Scroll to top functionality

  let  toTop = document.getElementById("toTop");
  
 if (toTop) {
  window.onscroll = function () {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      toTop.style.display = "block";
    } else {
      toTop.style.display = "none";
    }
  };

  // Smooth scroll to top when the button is clicked
  toTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
};   