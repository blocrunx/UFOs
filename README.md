# UFOs
### Project Overview
Dana would like to make her webpage more user firendly by adding the ability to filter by date, city, state, country, and UFO shape. This will be accomplied using the following steps:
- Write a function named buildFilters to:
  - Select target html elements using D3.
  - Use an if statement to test whether a user entry exists in the the following input html boxes:
    - Date
    - City
    - State
    - Country
    - Shape
- If a user entry exists, create a key in filterObject and assign the user input as the value.
- Write a function named filterTable to:
  - Convert filterObject into an array of entries.
  - Create a for loop to destructure each array entry into a key and a property.
  - Use Javascript .filter to filter rows of data matching the key and propery and assign them to a filteredData variable.
- Pass filteredData to existing buildTable function to build table with new data.
- Add call to filterTable function from buildFilters function.
- Use d3.selectAll get the html button id and run buildFilters on click.

### Resources
- Data Source: data.js
- Languages: Javascript ES6+, HTML, CSS
- Software: Visual Studio Code 1.45.0, Chrome 81.0.4044.138

### Summary
