// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select('tbody');

// creating buildTable function
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    //Next loop through data and append a row and cell for each value
    data.forEach((dataRow) => {
        //Append a row to the table body
        let row = tbody.append('tr');

        //Loop through each feild in dataRow and add each value to table (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
            }
        );
    });
}


function handleClick() {
    //Grab the datetime value from the filter
    let date = d3.select('#datetime').property('value');
    let filteredData = tableData;

    //Check to see if date was entered and filter the data
    if (date) {
        //Apply 'filter' to table data to only keep  rows that match 
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //Rebuild the table using filteredData, if no date enetered then 
    //filteredData will be original table.
    buildTable(filteredData);
};

//Attach an event to listen for the form button
d3.selectAll('#filter-btn').on('Click', handleClick);

//Build the table when page loads
buildTable(tableData);