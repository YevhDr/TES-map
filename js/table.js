var file = "data/station.csv";

d3.csv(file, function(error, data) {
    if (error) throw error;



    //Responsive size
    // var w = window,
    //     d = document,
    //     e = d.documentElement,
    //     g = d.getElementsByTagName('div#table')[0],
    //     // x = w.innerWidth / 2 || e.clientWidth / 2 || g.clientWidth / 2
    //     x = w.innerWidth || e.clientWidth || g.clientWidth;


    //Sorting by int value

    data.forEach(function(d) { return  d.percent = +d.percent; });

    var sortAscending = true;
    var table = d3.select('div#table').append('table')
            // .attr("width", x)
        ;



    var titles = d3.keys(data[0]);
    var headers = table.append('thead').append('tr')
        .selectAll('th')
        .data(["Станція", "Залишок", "Динаміка запасів"]).enter()
        .append('th')
        .text(function (d) {
            return d;
        });



    var rows = table.append('tbody').selectAll('tr')
        .data(data)
        .enter()
        .append('tr')
        .attr("onclick", function(d){ return "getStation('" + d.id +"')" });

// var letter = data.id;

    rows.selectAll('td')
        .data(function (d) {
            return titles.map(function (k) {
                return { 'value': d[k], 'name': k};
            });
        }).enter()
        .append('td')

        .append('div')
        .attr('id', function (d) {
            if (d.value.length < 2 && d.value !== 0)
            {return d.value}
        }).text(function (d) {
            return d.name == "id" ? "" : d.value;
        });

        table.selectAll("tbody tr")
         .sort(function(a, b) {
            return d3.ascending(a.percent, b.percent);
        });

    d3.select("div#p").append("text").text('даних немає');
});

