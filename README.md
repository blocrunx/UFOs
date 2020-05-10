# UFOs
### Project Overview
Dana curates a UFO website and would like to make her webpage more user friendly by adding the ability to filter the table of UFO sighting data by date, city, state, country, and UFO shape. This will be accomplished using the following steps:
- Write a function named buildFilters to:
  - Select target html elements using D3.
  - Use an if statement to test whether a user entry exists in the following input html boxes:
    - Date
    - City
    - State
    - Country
    - Shape
- If a user entry exists, create a key in filterObject and assign the user input as the value.
- Write a function named filterTable to:
  - Convert filterObject into an array of entries.
  - Create a for loop to destructure each array entry into a key and a property.
  - Use JavaScript .filter to filter rows of data matching the key and property and assign them to a filteredData variable.
- Pass filteredData to existing buildTable function to build table with new data.
- Add call to filterTable function from buildFilters function.
- Use d3.selectAll get the html button id and run buildFilters on click.

### Resources
- Data Source: data.js
- Languages: JavaScript ES6+, HTML, CSS
- Software: Visual Studio Code 1.45.0, Chrome 81.0.4044.138

### Recommendations
- Add additional data sets to build the websites data store.
- User input option to log sightings in real time.
- User forum for information sharing and community building.
- Table filter options to further aggregate data ie) search by frequency per city in ascending/descending order.
