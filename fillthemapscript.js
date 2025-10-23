// Array to store the list of countries the user has clicked (explored)
let exploredCountries = [];

// Get all countries (paths) from the SVG
const countries = document.querySelectorAll('.country');

// Get the status element to display the selected countries
const selectedCountriesDisplay = document.getElementById('selected-countries');

// Add a click event listener to each country path
countries.forEach(country => {
    country.addEventListener('click', function() {
        const countryName = this.getAttribute('data-name');
        
        // Check if the country has already been explored
        if (!exploredCountries.includes(countryName)) {
            exploredCountries.push(countryName);  // Add country to the explored list
            this.classList.add('selected');      // Mark the country as explored (CSS class)
        } else {
            // If the country was already clicked, deselect it
            exploredCountries = exploredCountries.filter(name => name !== countryName);
            this.classList.remove('selected');
        }

        updateExploredCountries(); // Update the displayed explored countries
    });
});

// Function to update the text showing the explored countries
function updateExploredCountries() {
    if (exploredCountries.length > 0) {
        selectedCountriesDisplay.textContent = `You've explored: ${exploredCountries.join(', ')}`;
    } else {
        selectedCountriesDisplay.textContent = "You've explored: None";
    }
}

// Reset button functionality to clear all selections
document.getElementById('reset-btn').addEventListener('click', () => {
    exploredCountries = [];  // Clear the explored countries list
    countries.forEach(country => country.classList.remove('selected'));  // Remove selected styling
    updateExploredCountries();  // Update the text
});
