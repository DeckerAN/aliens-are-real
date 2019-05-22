// from data.js
var tableData = data;


// Appending data to html table
var tbody = d3.select("tbody");
var row = tbody.append("tr");

tableData.forEach(function(collection) { 
    var row = tbody.append("tr");
    row.append("td").text(collection.datetime);
    row.append("td").text(collection.city);
    row.append("td").text(collection.state);
    row.append("td").text(collection.country);
    row.append("td").text(collection.shape);
    row.append("td").text(collection.durationMinutes);
    row.append("td").text(collection.comments);
});

// Filtering Table by Date using Forms
var dateFilter = d3.select('#filter-btn');

dateFilter.on('click', function() {
    
    d3.event.preventDefault();
    
    d3.select("tbody").text("");
    
    var inputElement = d3.select("#datetime");
    
    var inputValue = inputElement.property("value");

    tableData.forEach(function(collection) {
        if (inputValue === collection.datetime) {
            var row = tbody.append("tr");
            row.append("td").text(collection.datetime);
            row.append("td").text(collection.city);
            row.append("td").text(collection.state);
            row.append("td").text(collection.country);
            row.append("td").text(collection.shape);
            row.append("td").text(collection.durationMinutes);
            row.append("td").text(collection.comments);
        }
        else if (inputValue === "" ) {
            var row = tbody.append("tr");
            row.append("td").text(collection.datetime);
            row.append("td").text(collection.city);
            row.append("td").text(collection.state);
            row.append("td").text(collection.country);
            row.append("td").text(collection.shape);
            row.append("td").text(collection.durationMinutes);
            row.append("td").text(collection.comments);
        }
    });
    
    
    
    
    
    
});




    

    