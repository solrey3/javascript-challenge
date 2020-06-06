// from data.js
var tableData = data;

// Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page and then adds new rows of 
// data for each UFO sighting.

// Use D3 to select the table
var table = d3.select("table");

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Columns: `datetime`, `city`, `state`, `country`, `shape`, `durationMinutes`, 
// and `comments`

// Generate HTML Table with all data
function tableResults(items) {
    // Iterate through each item object
    items.forEach((item) => {

        // Append one table row `tr` to the table body
        var row = tbody.append("tr");

        // Iterate through each key and value
        Object.entries(item).forEach(([key, value]) => {    
  
          // Use the key to determine which array to push the value to
            if (key === "datetime") {
                row.append("td").text(value);
            }
            else if (key === "city") {
                row.append("td").text(value);
            }
            else if (key === "state") {
                row.append("td").text(value);
            }
            else if (key === "country") {
                row.append("td").text(value);
            }
            else if (key === "shape") {
                row.append("td").text(value);
            }
            else if (key === "durationMinutes") {
                row.append("td").text(value);
            }
            else if (key === "comments") {
                row.append("td").text(value);
            }
        });
    });
}

tableResults(tableData);

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// // Complete the event handler function for the form
// function runEnter() {

//     // Prevent the page from refreshing
//     d3.event.preventDefault();
    
//     // Select the input element and get the raw HTML node
//     var inputElement = d3.select("#datetime");
  
//     // Get the value property of the input element
//     var inputValue = inputElement.property("value");
//     console.log(inputValue.length)

//     // Filter on datetime   
//     var filteredData = tableData.filter(item => item.datetime === inputValue);
//     console.log(filteredData)

//     // If no input, then show full table, else generate new table results
//     if (inputValue.length === 0) {
//         tbody.html("");
//         tableResults(tableData);
//     }
//     else {
//         tbody.html("");
//         tableResults(filteredData);
//     }
      
// };

var filteredData = tableData;

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Create JS Object for multiple input values
    var inputValues = {};

    inputValues.datetime = d3.select("#datetime").property("value");
    inputValues.city = d3.select("#city").property("value").toLowerCase();
    inputValues.state = d3.select("#state").property("value").toLowerCase();
    inputValues.country = d3.select("#country").property("value").toLowerCase();
    inputValues.shape = d3.select("#shape").property("value").toLowerCase();
    console.log(inputValues);
    
    // Iterate JS Object
    var filteredData = tableData;
 
    // Filter on each input value if one exists
    Object.entries(inputValues).forEach(([key, value]) => {
        if (value.length > 0) {
            filteredData = filteredData.filter(item => item[key] === value);
        }
    });

    // Clear HTML table body and provide filtered results
    tbody.html("");
    tableResults(filteredData);
      
};
