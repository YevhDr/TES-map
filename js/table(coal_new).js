var file = "data/coal_new.json";

d3.json(file, function(error, data) {
    if (error) throw error;

    d3.select("p.date")
        .append("text")
        .text("Останнє оновлення: " + data[0].date)
        .style("color","white");

    data.forEach(function (d) {
        d.completance = +d.completance;
        d.plan_percent = +d.plan_percent;


    });

    var sortAscending = true;

    var table = d3.select('#table')
        .append('table')
        .attr('class', 'table table-condensed');

// Append the table header and body.
    var tableHead = table.append('thead'),
        tableBody = table.append('tbody');

// Add the table header content.
    tableHead.append('tr').selectAll('th')
        .data(["Станція", "Різниця з планом, тис. тонн", "Виконання плану"]).enter()
        .append('th')
        .text(function (d) {
            return d;
        });

// Add the table body rows.
    var rows = tableBody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr')
        .attr("id", function(d){ return d.id })
        .attr("onclick", function(d){ return "getStation('" + d.id +"')" });

// Add the stock name cell.
    rows.append('td')

        .text(function (d) {
            return d.station;
        });

// Add the stock name cell.
    rows.append('td')
        .text(function (d) {
            return d.completance;
        });


//Add the barcode chart.
    rows.append('td')
        .datum(function (d) {
            return d.mentions;
        })
        .call(spark());

// Add the number of mentions by hour, aligned to the right.
//     rows.append('td')
//         .text(function (d) {
//             return d.plan_percent;
//         });




    table.selectAll("tbody tr")
        .sort(function(a, b) {
            return d3.ascending(a.plan_percent, b.plan_percent) ;
        });

   d3.select("tr#f").attr("class", "no-bottom-border");

   d3.select("tr#y").attr("class", "no-bottom-border");



});



