function spark(elemId, data) {


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

    //select last 100 rows from data
    // data = data.slice(Math.max(data.length - 100, 1));

    var width = 90;
    var height = 20;

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
            return y(d.plan_percent);
        });

    x.domain(d3.extent(data, function (d) {
        return d.date;
    }));
    y.domain([0, d3.max(data, function (d) {
        return d.plan_percent ;
    })]);


    var svg = d3.select(elemId)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .style("overflow", "visible")
        ;
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



    var letter = elemId.split("#").pop();



    var test = "below" + letter;
    var test2 = "above" + letter;


    // var min = data[0].min;
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


        // svg.append('path')
        //     .datum(data)
        //     .attr('class', 'sparkline')
        //     .attr('d', line);


        // svg.append("line")
        //     .attr("x1", 0)
        //     .attr("y1", y(min))
        //     .attr("x2", width)
        //     .attr("y2", y(min))
        //     .attr("stroke-width", 1)
        //     .attr("stroke", "green")
        //     .attr("opacity", "0.4")
        //     // .attr("stroke-dasharray", 3,3)
        // ;

        var focus = svg.append("g")
            .attr("class", "focus")
            .style("display", "none");

        focus.append("circle")
            .attr("r", 3);

        focus.append("text")
            .attr("x", 9)
            .attr("dy", ".35em")
            .style("font-size", "0.8em")
            .style("fill", "white");

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

}

var url_a = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS6LPsifgnpqY6expgn0QByGyMg86yZuyRgUNkAGQtMb_dRuC2r7sklrCrt2oZhKlD8NbZ37KTDByJr/pub?gid=1019885254&single=true&output=csv";
// var url_a = "data/stations/a_g.csv";
 d3.csv(url_a, function (error, data) {
     spark('div#a', data);

 });

var url_b = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTJEW6nKsJm2rP4fG0gK-rYo7l6mLqxlLz6gFKHRcp5K4IoWwtL3E5vwhLtdulDL4d38eELfjRZyTfu/pub?gid=1120876805&single=true&output=csv"
// var url_b = "data/stations/b_g.csv";
d3.csv(url_b, function (error, data) {
    spark('div#b', data);

});

var url_c = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTwJV1HmXlmE9RpSXbTI3FkqxXkJJRgegd0119D1i8IMfD6hOIZalUK6X0LspGXorzDvIpNGuvvW8sh/pub?gid=505724100&single=true&output=csv";
// var url_c = "data/stations/c_a.csv";
d3.csv(url_c, function (error, data) {
    spark('div#c', data);
});



var url_z = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRIWHuLM1_6FKHwinALxRZE2pDLSipwYtQ0GpOPNpZQ6lSk_p4M65g8TTiAo_Ol7KpKj6YLV7ktkGyR/pub?gid=146041827&single=true&output=csv";
// var url_z = "data/stations/z_g.csv";
d3.csv(url_z, function (error, data) {
    spark('div#z', data);

});



var url_e = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSuzLMcanQIMc3eG3StOonAyY-igVzmzl_imtoLhuspSoOcwBM9UQioQcW5KHca4-xAcem_EAwf_rPz/pub?gid=796966195&single=true&output=csv";
// var url_e = "data/stations/e_g.csv";
d3.csv(url_e, function (error, data) {
    spark('div#e', data);
});


var url_v = "https://docs.google.com/spreadsheets/d/e/2PACX-1vROTuWJfJKyfsBglE5aRrsoXk05wZnx6ZCcLXJ2XqIvWxgagle52Rww8ffiE2eimonMTYo4ok7j0y9u/pub?gid=1042465254&single=true&output=csv";
// var url_v = "data/stations/v_a.csv";
d3.csv(url_v, function (error, data) {
    spark('div#v', data);
});


var url_y = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1tCCW8pKAvEjkXeLEckP6HWvTvxHCAV3wwdjbrhB42-3EaimtMKAtBvRkc1cbrEqS3SDTjz_E4lLw/pub?gid=2007811185&single=true&output=csv";
// var url_y = "data/stations/v_g.csv";
d3.csv(url_y, function (error, data) {
    spark('div#y', data);
});


var url_g = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTAoNVd02dgxNJSE42-uE8vO5ETxoYselx11nciswMQC9FwRgnpCWBdYrSk1x2SPMNBww7G84ecGuTB/pub?gid=1109697394&single=true&output=csv";
// var url_g = "data/stations/g_g.csv";
d3.csv(url_g, function (error, data) {
    spark('div#g', data);
});

var url_i = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4dFEeYWqWflqVMUyEfMtfsgJJisEsTaBMhApBl2cTYRWRCLFJfgHo_9Wp7TkFJl632efaK-xMrcUi/pub?gid=115152773&single=true&output=csv";
// var url_i = "data/stations/i_a.csv";
d3.csv(url_i, function (error, data) {
    spark('div#i', data);
});

var url_j = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQGB6GUCACR9P1V5bkbNCSHadEV40aPcxljwx14oodyMpeINaPMTO5ZpyJOBjtr_sit6LkrdokWZ3N9/pub?gid=2138837977&single=true&output=csv";
// var url_j = "data/stations/j_p.csv";
d3.csv(url_j, function (error, data) {
    spark('div#j', data);
});

var url_k = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQN_EDGedUhjETWgSephOy9JlvPseS8RwKgYwK9RtvjOvKB-DqqrEGJK1iAeIGJEintYEbW4LagyYFr/pub?gid=1310864902&single=true&output=csv";
// var url_k = "data/stations/k_g.csv";
d3.csv(url_k, function (error, data) {
    spark('div#k', data);
});

var url_l = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSkkyDI6zetJpv0xo6hon1tylRkW-90H3VLiQ5DTbWFGk_f5xywj7EQaNadAN1mTqPpYN3TOV54Wpo3/pub?gid=2049455500&single=true&output=csv";
// var url_l = "data/stations/l_g.csv";
d3.csv(url_l, function (error, data) {
    spark('div#l', data);
});

var url_m = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQCAzAhDEKRrcmsYd9Yl15yuWeyR1qlRJjGU4_PTh1U-e7ORyMa9s8rG_tj1lNCaR7VeKS1ORNHbA0_/pub?gid=1708658118&single=true&output=csv";
// var url_m = "data/stations/m_a.csv";
d3.csv(url_m, function (error, data) {
    spark('div#m', data);
});

var url_n = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ343GBz8Tl-ZihXO1GTMdLBXy0VvhWn3wOIr0pL1RrejsTNSJqCXjCf2MHBa-S70N5Yidzx2Q0FESi/pub?gid=1018724007&single=true&output=csv";
// var url_n = "data/stations/n_a.csv";
d3.csv(url_n, function (error, data) {
    spark('div#n', data);
});

var url_o = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS6LF5v1sGXG0vtNqHo_6bk0n56NpX13Fw5oPkMFuWh1OtNj4RUVEG4VOmUPXC-MorvhOkIL1AZ_xrv/pub?gid=957857947&single=true&output=csv";
// var url_o = "data/stations/o_a.csv";
d3.csv(url_o, function (error, data) {
    spark('div#o', data);
});

var url_q = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRijfL_R2pnMi3DmdUOo976KgET6pUt4WsA_jBideKEi52wb6id96ERVvabXfvEl956rpqWvuz_7RJu/pub?gid=472584304&single=true&output=csv";
// var url_q = "data/stations/q_a.csv";
d3.csv(url_q, function (error, data) {
    spark('div#q', data);
});

var url_r = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRIUmFYeDXKsz3ThjNkCWxxbl7SNf-3ML3y4sTdwUCn8_sSou0qGCxqSQTsozdU8FYU3zXnZrfQhflR/pub?gid=1312991889&single=true&output=csv";
// var url_r = "data/stations/r_a.csv";
d3.csv(url_r, function (error, data) {
    spark('div#r', data);
});

var url_s = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQAt5iH9mdnueHeFoONUaNDhJVYjQf53dhJn-tKrTlYtAl7XdmmHJaxTCw0VYyBAM0Au-YSGSBRitIW/pub?gid=2107197211&single=true&output=csv";
// var url_s = "data/stations/s_g.csv";
d3.csv(url_s, function (error, data) {
    spark('div#s', data);
});


var url_t = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT2k8L8qnGJVrdZv4Bewa849c0CG_vKmyv0IgC20LzvrwBttsdnYKaSUi_gFNXvd989vUNsl8wtxATv/pub?gid=995406334&single=true&output=csv";
// var url_t = "data/stations/t_a.csv";
d3.csv(url_t, function (error, data) {
    spark('div#t', data);
});

var url_x = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZ_XHgQs6hlm8qYk8E5F_Rev0iGp3mQc6kAd-3a-18lQy7XCfkRaHsOVYVumY0W3GgUunoh3Ps6iwZ/pub?gid=826050536&single=true&output=csv";
// var url_x = "data/stations/x_a.csv";
d3.csv(url_x, function (error, data) {
    spark('div#x', data);
});

var url_f = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1n_-6p0j2rCgchUl6H0hqUH5XhvFFoqhdmKjrFjEaIDV7BM0XKGA-ux_kUiu42KVSSexIOjfsBPUn/pub?gid=267893613&single=true&output=csv";
// var url_f = "data/stations/x_g.csv";
d3.csv(url_f, function (error, data) {
    spark('div#f', data);
});



// Зміївська ТЕС,16.339 <br/> 92.268,v,49.15201029759886,33



