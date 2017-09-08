var file = "data/station.csv";

d3.csv(file, function(error, data) {
    if (error) throw error;



    //Responsive size
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('div#table')[0],
        x = w.innerWidth / 2 || e.clientWidth / 2 || g.clientWidth / 2;


    //Sorting by int value

    data.forEach(function(d) { return  d.percent = +d.percent;

    });

    var sortAscending = false;
    var table = d3.select('div#table').append('table').attr("width", x);



    var titles = d3.keys(data[0]);
    var headers = table.append('thead').append('tr')
        .selectAll('th')
        .data(["Назва", "Загруз", "Динаміка"]).enter()
        .append('th')
        .text(function (d) {
            return d;
        });



    var rows = table.append('tbody').selectAll('tr')
        .data(data)
        .enter()
        .append('tr');



    rows.selectAll('td')
        .data(function (d) {
            return titles.map(function (k) {
                return { 'value': d[k], 'name': k};
            });
        }).enter()
        .append('td')
        .append('div')
        .attr('id', function (d) {
            return d.value;
        })
        .text(function (d) {
            return d.name == "id" ? "" : d.value;
        });

    table.selectAll("tbody tr")
        .sort(function(a, b) {
            return d3.descending(a.percent, b.percent);
        });

});
