var file = "data/coal_new.json";

d3.json(file, function (error, data) {
    if (error) throw error;

    d3.select("p.date")
        .append("text")
        .text("Останнє оновлення: " + data[0].date)
        .style("color", "white");

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
        .attr("id", function (d) {
            return d.id
        })
        .attr("onclick", function (d) {
            return "getStation('" + d.id + "')"
        });


    rows.append('td')
        .attr("id", function (d) {
            return d.id
        })

        .text(function (d) {
            return d.station;
        });


    rows.append('td')
        .text(function (d) {
            return d.completance;
        });


    //Add the spark chart.
    rows.append('td')
        .datum(function (d) {
            return d.mentions;
        })
        .call(spark());

    //double sort by numver and then by name
    table.selectAll("tbody tr")
        .sort(function (a, b) {
            return d3.ascending(a.plan_percent, b.plan_percent) ||
                d3.ascending(a.mentions[0].coal_type, b.mentions[0].coal_type)
        });



    //remove value of selected
    d3.select("td#y").text("");
    d3.select('td#f').text("");



    // remove bottom-border of the rows
    d3.select("tr#v")
        .attr("class", "no-bottom-border");

    d3.select("tr#x")
        .attr("class", "no-bottom-border");



})
;



