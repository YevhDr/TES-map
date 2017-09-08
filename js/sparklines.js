function spark(elemId, data, ur) {


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
         d.reserve = +d.reserve;

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
             return y(d.reserve);
         });

     x.domain(d3.extent(data, function (d) {
         return d.date;
     }));
     y.domain([0, d3.max(data, function (d) {
         return d.reserve;
     })]);



     var svg = d3.select(elemId)
         .append('svg')
         .attr('width', width)
         .attr('height', height)
         .style("overflow", "visible")
         ;

    var min = data[0].min;

    svg.append("clipPath")
        .attr("id", "clip-below")
        .append("rect")
        .attr("y", y(min))
        .attr("width", width)
        .attr("height", height - y(min));

    svg.append("clipPath")
        .attr("id", "clip-above")
        .append("rect")
        .attr("width", width)
        .attr("height", y(min));


    // svg.append('circle')
    //     .attr('class', 'sparkcircle')
    //     .attr('cx', x(data[0].date))
    //     .attr('cy', y(data[0].close))
    //     .attr('r', 1.5);

    svg.selectAll(".line")
        .data(["below", "above"])
        .enter().append("path")
        .attr("class", function (d) {
            return "line " + d;
        })
        .attr("clip-path", function (d) {
            return "url(#clip-" + d + ")";
        })
        .datum(data)
        .attr("d", line);


    svg.append("line")
        .attr("x1", 0)
        .attr("y1", y(min))
        .attr("x2", width)
        .attr("y2", y(min))
        .attr("stroke-width", 0.5)
        .attr("stroke", "red")
        .attr("opacity", "0.4")
        .attr("stroke-dasharray", 3,3);

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
        focus.attr("transform", "translate(" + x(d.date) + "," + y(d.reserve) + ")");
        focus.select("text").text(formatCurrency(d.reserve));
    }





}


 var url_a = "data/stations/a.csv";
 d3.csv(url_a, function (error, data) {
     spark('div#a', data);
 });

var url_b = "data/stations/b.csv";
d3.csv(url_b, function (error, data) {
    spark('div#b', data);
});

var url_c = "data/stations/c.csv";
d3.csv(url_c, function (error, data) {
    spark('div#c', data);
});

var url_d = "data/stations/d.csv";
d3.csv(url_d, function (error, data) {
    spark('div#d', data);
});

var url_f = "data/stations/f.csv";
d3.csv(url_f, function (error, data) {
    spark('div#f', data);
});

var url_g = "data/stations/g.csv";
d3.csv(url_g, function (error, data) {
    spark('div#g', data);
});

var url_i = "data/stations/i.csv";
d3.csv(url_i, function (error, data) {
    spark('div#i', data);
});

var url_j = "data/stations/j.csv";
d3.csv(url_j, function (error, data) {
    spark('div#j', data);
});

var url_k = "data/stations/k.csv";
d3.csv(url_k, function (error, data) {
    spark('div#k', data);
});

var url_l = "data/stations/l.csv";
d3.csv(url_l, function (error, data) {
    spark('div#l', data);
});

var url_m = "data/stations/m.csv";
d3.csv(url_m, function (error, data) {
    spark('div#m', data);
});

var url_n = "data/stations/n.csv";
d3.csv(url_n, function (error, data) {
    spark('div#n', data);
});

// var url_o = "data/stations/o.csv";
// d3.csv(url_o, function (error, data) {
//     spark('div#o', data);
// });

var url_p = "data/stations/p.csv";
d3.csv(url_p, function (error, data) {
    spark('div#p', data);
});

var url_q = "data/stations/q.csv";
d3.csv(url_q, function (error, data) {
    spark('div#q', data);
});

var url_r = "data/stations/r.csv";
d3.csv(url_r, function (error, data) {
    spark('div#r', data);
});

var url_s = "data/stations/s.csv";
d3.csv(url_s, function (error, data) {
    spark('div#s', data);
});


var url_t = "data/stations/t.csv";
d3.csv(url_t, function (error, data) {
    spark('div#t', data);
});







