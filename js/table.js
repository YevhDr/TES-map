var file = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR4d-loqjlGmXlhs5ncxzYLPPrk5NblgJAUJwhBOI2gjJ7u4KrIi-Bbp69V-5b5X0FfLm4D4ECgc4OQ/pub?output=csv";


d3.csv(file, function(error, data) {
    if (error) throw error;


    d3.select("p#date")
        .append("text")
        .text("Останнє оновлення: " + data[0].date)
        .style("color","white");


    //Responsive size
    // var w = window,
    //     d = document,
    //     e = d.documentElement,
    //     g = d.getElementsByTagName('div#table')[0],
    //     // x = w.innerWidth / 2 || e.clientWidth / 2 || g.clientWidth / 2
    //     x = w.innerWidth || e.clientWidth || g.clientWidth;


    data.forEach(function(d) { return  d.plan_percent = +d.plan_percent; });



    var sortAscending = true;
    var table = d3.select('div#table').append('table')
            // .attr("width", x)
        ;



    var titles = d3.keys(data[0]);
    var headers = table.append('thead').append('tr')
        .selectAll('th')
        .data(["Станція", "Різниця з планом, тис. тонн", "Виконання плану"]).enter()
        // .data(titles).enter()
        .append('th')
        .text(function (d) {
            return d;
        });



    var rows = table.append('tbody').selectAll('tr')
        .data(data, function (d) {return d.id})
        .enter()
        .append('tr')
        .attr("onclick", function(d){ return "getStation('" + d.id +"')" });


     table.selectAll("tbody tr")
        .sort(function(a, b) {
            return d3.ascending(a.plan_percent, b.plan_percent);
        });


    rows.selectAll('td')

        .data(function (d) {
            return titles.map(function (k) {
                return { 'value': d[k], 'name': k};
            });
        })
        .enter()
        .append('td')
        .filter(function (d, i) { return i === 0 || i === 1 || i === 2;}) //return only 0,1,4 "columns"
        .append('div')
        .attr('id', function (d) {
            if (d.value.length < 2 && d.value !== 0)
            {return d.value}
        }).html(function (d) {


            return d.name == "id" ? "" : d.value;
        });
        // .attr("class", function(d) { return  d.value.search(/[0-9]/) < 0 ? "station" : "remains" });

        table.selectAll("tbody tr")
         .sort(function(a, b) {
            return d3.ascending(a.plan_percent, b.plan_percent);
        });



      var nobottom1 = d3.select(d3.select("div#v").node().parentNode).node().parentNode;
   d3.select(nobottom1).attr("class", "no-bottom-border");

    var nobottom2 = d3.select(d3.select("div#x").node().parentNode).node().parentNode;
    d3.select(nobottom2).attr("class", "no-bottom-border");


    d3.select("div#p").append("text").text('даних немає');




});



