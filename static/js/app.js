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





