var file = "data/annotation.json";

d3.json(file, function(error, data) {
    if (error) throw error;


    data.forEach(function (d) {
        d.plan_percent = +d.plan_percent;


    });

    var sortAscending = true;

    var table = d3.select('#annotation')
        .append('table')
        .attr('class', 'annotate');

// Append the table header and body.
    var tableBody = table.append('tbody');

// Add the table body rows.
    var rows = tableBody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr');

// Add the stock name cell.
    rows.append('td')
        .text("динаміка виконання плану за останні 100 робочих днів")
        .attr('margin-right', "10px");

        // .text(function (d) {
        //     return d.station;
        // });

//Add the barcode chart.
    rows.append('td')
        .datum(function (d) {
            return d.mentions;
        })
        .call(annotation());

    // rows.append('td')
    //     .text("динаміка виконання плану за останні 100 робочих днів")
    //     .attr('margin-right', "10px");

    // rows.append('td')
    //     .text(function (d) {
    //         return d.reserve;
    //     })
    //     .attr("cx", "-20px");

// Add the number of mentions by hour, aligned to the right.
//     rows.append('td')
//         .text(function (d) {
//             return d.plan_percent;
//         });

    table.selectAll("tbody tr")
        .sort(function(a, b) {
            return d3.ascending(a.plan_percent, b.plan_percent);
        });

});
