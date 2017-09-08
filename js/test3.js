function spark(elemId, data) {


    var parseDate = d3.time.format("%Y-%m-%d").parse;
    bisectDate = d3.bisector(function (d) {
        return d.date;
    }).left,
        formatValue = d3.format(",.2f"),
        formatCurrency = function (d) {
            return formatValue(d);
        };

    data.forEach(function (d) {
        d.date = parseDate(d.date);
        d.close = +d.close;

    });

    var xAxis = d3.svg.axis().scale(x)
        .orient("bottom").ticks(9);

    //time to chronological order
    function sortByDateAscending(a, b) {
        // Dates will be cast to numbers automagically:
        return a.date - b.date;
    }

    data = data.sort(sortByDateAscending);

    var width = 100;
    var height = 30;

    var x = d3.scale
        .linear()
        .range([0, width]);

    var y = d3.scale
        .linear()
        .range([height, 0]);

    var line = d3.svg.line()
        .interpolate("basis")
        .x(function (d) {
            return x(d.date);
        })
        .y(function (d) {
            return y(d.close);
        });

    x.domain(d3.extent(data, function (d) {
        return d.date;
    }));
    y.domain([0, d3.max(data, function (d) {
        return d.close;
    })]);

    var svg = d3.select(elemId)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .style("overflow", "visible")
        ;
    var min = data[0].min;

    svg.append("linearGradient")
        .attr("id", "temperature-gradient")
        .attr("gradientUnits", "userSpaceOnUse")
        .attr("x1", 0).attr("y1", y(0))
        .attr("x2", 0).attr("y2", y(min))
        .selectAll("stop")
        .data([
            {offset: "0%", color: "black"},
            {offset: "50%", color: "black"},
            {offset: "50%", color: "red"},
            {offset: "100%", color: "red"}
        ])
        .enter().append("stop")
        .attr("offset", function(d) { return d.offset; })
        .attr("stop-color", function(d) { return d.color; });


    svg.append("line")
        .attr("x1", 0)
        .attr("y1", y(min))
        .attr("x2", width)
        .attr("y2", y(min))
        .attr("stroke-width", 0.5)
        .attr("stroke", "red")
        .attr("opacity", "0.4")
        .attr("stroke-dasharray", 3,3);

    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);

    var focus = svg.append("g")
        .attr("class", "focus")
        .style("display", "none");

    focus.append("circle")
        .attr("r", 1.5);

    focus.append("text")
        .attr("x", 9)
        .attr("dy", ".35em")
        .style("font-size", "0.7em");

    svg.append("rect")
        .attr("class", "overlay")
        .attr("width", width)
        .attr("height", height)
        .on("mouseover", function () {
            focus.style("display", null);
        })
        .on("mouseout", function () {
            focus.style("display", "none");
        })
        .on("mousemove", mousemove);

    function mousemove() {
        var x0 = x.invert(d3.mouse(this)[0]),
            i = bisectDate(data, x0, 1),
            d0 = data[i - 1],
            d1 = data[i],
            d = x0 - d0.date > d1.date - x0 ? d1 : d0;
        focus.attr("transform", "translate(" + x(d.date) + "," + y(d.close) + ")");
        focus.select("text").text(formatCurrency(d.close));
    }





}


var url = "data/stations/Burshtynska TES.csv";
d3.csv(url, function (error, data) {
    spark('div#a', data);
});

var url2 = "data/stations/Ladyzhynska TES.csv";
d3.csv(url2, function (error, data) {
    spark('div#b', data);
});

var url3 = "data/stations/Zaporizka TES.csv";
d3.csv(url3, function (error, data) {
    spark('div#c', data);
});

var url4 = "data/stations/Slov_yanska TES.csv";
d3.csv(url4, function (error, data) {
    spark('div#d', data);
});

var url5 = "data/stations/Zmiivska TES.csv";
d3.csv(url5, function (error, data) {
    spark('div#e', data);
});

var url6 = "data/stations/Vuhlehirska TES.csv";
d3.csv(url6, function (error, data) {
    spark('div#f', data);
});

var url7 = "data/stations/Razom Trypilska TES.csv";
d3.csv(url7, function (error, data) {
    spark('div#g', data);
});






