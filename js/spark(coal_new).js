var spark = function () {

    var width = 120;
    var height = 30;
    var margin = {top: 10, bottom: 0, left:0, right:0};

    function chart(selection) {

        selection.each(function (data) {

            var div = d3.select(this),
                svg = div.selectAll('svg').data([data]);

            svg.enter()
                .append('svg')
                .attr('width', width)
                .attr('height', height - margin.top)
                .style("overflow", "visible");

            var parseDate = d3.time.format("%Y-%m-%d").parse;
            bisectDate = d3.bisector(function (d) {
                return d.date;
            }).left,
                formatValue = d3.format(",.1f"),
            formatCurrency = function (d) {
                return formatValue(d);
            };

            data.forEach(function (d) {
                    d.date = parseDate(d.date);
                    d.plan_percent = +d.plan_percent;
             });


            // data.forEach(function (d) {
            //     d.forEach(function (m) {
            //         m.date = parseDate(m.date);
            //         m.plan_percent = +m.plan_percent;
            //     });
            // });

            var xAxis = d3.svg.axis().scale(x)
                .orient("bottom").ticks(9);

            //time to chronological order
            function sortByDateAscending(a, b) {
                // Dates will be cast to numbers automagically:
                return a.date - b.date;
            }

            data = data.sort(sortByDateAscending);
            data = data.slice(Math.max(data.length - 100, 1));


            var x = d3.scale.linear().range([0, width]);

            var y = d3.scale.linear().range([height, 0]);

            var line = d3.svg.line().interpolate("basis")
                .x(function (d) {
                    return x(d.date);
                })
                .y(function (d) {
                    return y(d.plan_percent);
                });

            x.domain(d3.extent(data, function (d) {
                return d.date;
            }));
            y.domain([-0.1, d3.max(data, function (d) {
                return d.plan_percent;
            })]);

            var plan_percent = data[data.length-1].plan_percent;

            svg.append("text")
                .data(data)
                .attr("transform", "translate(" + (width + 3 ) + "," + y(data[data.length-1].plan_percent) + ")")
                .attr("dy", ".10em")
                .attr("text-anchor", "start")
                .style("fill", "grey")
                .text(function (d) {
                    return d.coal_type + ", " + plan_percent + "%"
                })
                .style("font-size", "0.8em")
                .style("padding-top", "5px");

            var parent_data = d3.select(this.parentNode).datum();
            var letter = parent_data.id;


            var test = "below" + letter;
            var test2 = "above" + letter;

            var min = 90;

            svg.selectAll(".line")
                .data([test, test2])
                .enter()
                .append("path")
                .attr("class", function (d) {
                    return "line " + d;
                })
                .attr("clip-path", function (d) {
                    return "url(#clip-" + d + ")"
                })
                .datum(data)
                .attr("d", line);

            svg.append("clipPath")
                .attr("id", "clip-" + test)
                .append("rect")
                .attr("y", y(min))
                .attr("width", width)
                .attr("height", height - y(min));

            svg.append("clipPath")
                .attr("id", "clip-" + test2)
                .append("rect")
                .attr("width", width)
                .attr("height", y(min));

            var focus = svg.append("g")
                .attr("class", "focus")
                .style("display", "none");

            focus.append("circle")
                .attr("r", 3);

            focus.append("text")
                .attr("x", 9)
                .attr("dy", ".35em")
                .style("font-size", "0.8em")
                .style("fill", "red");

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
                focus.attr("transform", "translate(" + x(d.date) + "," + y(d.plan_percent) + ")");
                focus.select("text").text(formatCurrency(d.plan_percent) + " %");
            }


            // svg.append('path')
            //     .datum(data)
            //     .attr('class', 'sparkline')
            //     .attr('d', line);


        });

    }

    return chart;

};