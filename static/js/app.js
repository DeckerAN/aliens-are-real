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




    

    