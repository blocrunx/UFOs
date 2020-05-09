// import the data from data.js
const tableData = data;

// Reference the thml using tbody
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  };
var filterObject = {};

  function buildFilters() {
    // Grab the entered values ot be filtered
    let sightingDate = d3.select("#datetime").property("value");
    let sightingPlace = d3.select("#city").property("value");
    let sightingState = d3.select("#state").property("value");
    let sightingCountry = d3.select("#country").property("value");
    let sightingShape = d3.select("#shape").property("value");
        
    // Conditionals to check user entered filter entries 
    if (sightingDate){
      filterObject.date=sightingDate;
    };

    if(sightingPlace){
      filterObject.city=sightingPlace;
    };

    if (sightingState){
      filterObject.state=sightingState;
    };

    if (sightingCountry){
      filterObject.country=sightingCountry;
    };

    if (sightingShape){
      filterObject.shape=sightingShape;
    };
    
  
    
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    filterTable();
  };

  function filterTable() {

    // Set the filteredData to the tableData
    let filteredData = tableData
    // Loop through all of the filters and keep any data that
    // matches the filter values
    
    // First convert the object into an array of entries
    const entries = Object.entries(filterObject)

    // Destructure the array into its key and property
    for (const [key, value] of entries) {
      filteredData = filteredData.filter(row => row[key] === value);
    }
      

    // Finally, rebuild the table using the filtered Data
    buildTable(filteredData);
  }
  
  d3.selectAll("#filter-btn").on("click", buildFilters);

  buildTable(tableData);