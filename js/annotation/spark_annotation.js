var annotation = function () {

    var width = 150;
    var height = 50;



    function chart(selection) {

        selection.each(function (data) {

            var div = d3.select(this),
                svg = div.selectAll('svg').data([data]);

            svg.enter()
                .append('svg')
                .attr('width', width)
                .attr('height', height)
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

            var xAxis = d3.svg.axis().scale(x)
                .orient("bottom").ticks(9);

            //time to chronological order
            function sortByDateAscending(a, b) {
                // Dates will be cast to numbers automagically:
                return a.date - b.date;
            }

            data = data.sort(sortByDateAscending);
            // data = data.slice(Math.max(data.length - 100, 1));

            //select last 100 rows from data
            // data = data.slice(Math.max(data.length - 100, 1));


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
            y.domain([0, d3.max(data, function (d) {
                return d.plan_percent;
            })]);

            var plan_percent = data[data.length-1].plan_percent;

            svg.append("text")
                .data(data)
                .attr("transform", "translate(" + (width - 80) + "," + y(data[data.length-1].plan_percent) + ")")
                .attr("dy", "1em")
                .attr("text-anchor", "start")
                .style("fill", "grey")
                .text(function (d) {
                    return d.coal_type + ", " + plan_percent + "%"
                })
                .style("font-size", "1em")
                .style("padding-top", "5px")
                .style("width", width);

            svg.append("text")
                .data(data)
                .attr("transform", "translate(" + (width - 80) + "," + y(data[data.length-1].plan_percent) + ")")
                .attr("dy", "2.5em")
                .attr("text-anchor", "start")
                .style("fill", "grey")
                .text("(поточне виконанння плану)")
                .style("font-size", "1em")
                .style("width", width);

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

            svg.append("text")
                .attr("dy", y(min) + 3)
                .attr("dx", width / 3 + 4)
                .attr("text-anchor", "start")
                .style("fill", "white")
                .text("план виконано менше ніж на 90%")
                .style('font-style', "italic")
                .style("text-align", "right")
                .style("font-size", "1em")
                .style("fill", "red")
                .style("width", width);

            svg.append("line")
                .attr("x1", 0)
                .attr("x2", width / 3)
                .attr("y1", y(min))
                .attr("y2", y(min))
                .attr("stroke", "red");

        });

    }

    return chart;

};