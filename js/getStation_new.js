var getStation = function (stat) {

    var file = "coal_output/data.json";

    d3.json(file, function (error, data) {
        if (error) throw error;
        data.forEach(function (d) {
            d3.select(this);


            if (stat == d.id) {
                console.log("hello");
                d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
                d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
                map.setView(new L.LatLng(d.latitude, d.longitude), 6);
                L.marker([d.latitude, d.longitude], {icon: yellowPoint})
                    .bindTooltip(d.station, {
                        permanent: true,
                        direction: 'right'
                    }).addTo(cities);
                d3.selectAll("p.temporary").remove();

/* =======================================
Назва станції
========================================== */
                d3.select("div.text").append("p").attr("class", "temporary")
                    .html("<b>" + d.station + "</b>").style("font-size", "1.5em");


/* =======================================
ВЛАСНИК
========================================== */
                d3.select("div.text").append("p").attr("class", "temporary")
                    .html("<b>Власник – </b><span>" + d.owner + "</span>");

/* =======================================
 Максимальне навантаження  ШАПКА
========================================== */
                if (d.max_a >= 0 || d.max_g >= 0 || d.max_p >= 0) {
                    d3.select("div.text").append("p").attr("class", "temporary")
                        .html("<b>Максимальне  завантаження складів:</b>")
                        .style("margin-top", "20px")
                        // .style("color", "#f9fa7f")
                        // .style("opacity", "0.7");
                ;}

/* =======================================
 Максимальне навантаження по типам вугілля
========================================== */
                if (d.max_a > 0) {
                    d3.select("div.text").append("p").attr("class", "temporary")
                        .html("<span>антрацит – <b>" + d.max_a + " тис. тонн </span></b>");
                } else if (d.max_a == 0){
                    d3.select("div.text").append("p").attr("class", "temporary")
                        .html("<span>антрацит <b>– немає даних </span></b>");
                }

                if (d.max_g > 0) {
                    d3.select("div.text").append("p").attr("class", "temporary")
                        .html("<span>газове – <b>" + d.max_g + " тис. тонн </span></b>");
                } else if (d.max_g == 0){
                    d3.select("div.text").append("p").attr("class", "temporary")
                        .html("<span>газове – <b>немає даних </span></b>");
                }

                if (d.max_p > 0) {
                    d3.select("div.text").append("p").attr("class", "temporary")
                        .html("<span>пісне – <b>" + d.max_p + " тис. тонн </span></b>");
                } else if (d.max_p == 0){
                    d3.select("div.text").append("p").attr("class", "temporary")
                        .html("<span>пісне – <b>немає даних </span> </b>");
                }

/* =======================================
 Мінімальне навантаження по типам вугілля
========================================== */
                if (d.min_a >= 0 || d.min_g >= 0 || d.min__p >= 0) {
                    d3.select("div.text").append("p").attr("class", "temporary")
                        .html("<b>Мінімальний залишок вугілля для функціонування:</b>")
                        .style("margin-top", "20px");
                }



                if (d.min_a > 0) {
                    d3.select("div.text").append("p").attr("class", "temporary")
                        .html("<span>антрацит – <b>" + d.min_a + " тис. тонн </span></b>");
                } else if (d.min_a == 0){
                    d3.select("div.text").append("p").attr("class", "temporary")
                        .html("<span>антрацит – <b>немає даних </span> </b>");
                }

                if (d.min_g > 0) {
                    d3.select("div.text").append("p").attr("class", "temporary")
                        .html("</br><span>газове – <b>" + d.min_g + " тис. тонн </span></b>");
                } else if (d.min_g == 0){
                    d3.select("div.text").append("p").attr("class", "temporary")
                        .html("<span>газове –<b> немає даних </span></b>");
                }

                if (d.min_p > 0) {
                    d3.select("div.text").append("p").attr("class", "temporary")
                        .html("<span>пісне – <b>" + d.min_p + " тис. тонн </span></b>");
                } else if (d.min_p == 0){
                    d3.select("div.text").append("p").attr("class", "temporary")
                        .html("<span>пісне –<b> немає даних </span></b>");
                }




 /* =======================================
 щоденні витрати у січні 2016 ШАПКА
 ========================================== */
                if (d.spending_a >= 0 || d.spending_g >= 0 || d.spending_p >= 0) {
                    d3.select("div.text").append("p").attr("class", "temporary")
                        .html("<b>Щоденні витрати у січні 2016 р.:</b>")
                        .style("margin-top", "20px");
                }

/* =======================================
щоденні витрати у січні 2016 (антрацит)
========================================== */
                if (d.spending_a > 0) {
                    d3.select("div.text").append("p").attr("class", "temporary")
                        .html("<span>антрацит – <b>" + d.spending_a + " тис. тонн</span></b>");
                } else if (d.spending_a == 0) {
                    d3.select("div.text").append("p").attr("class", "temporary")
                        .html("<span>антрацит – <b>немає даних</span></b>");
                }

/* ==========================================
щоденні витрати у січні 2016 (газове)
========================================== */
                if (d.spending_g > 0) {
                    d3.select("div.text").append("p").attr("class", "temporary")
                        .html("<span>газове – <b>" + d.spending_g + " тис. тонн</span></b>");
                }else if (d.spending_g == 0) {
                    d3.select("div.text").append("p").attr("class", "temporary")
                        .html("<span>газове – <b>немає даних</span></b>");
                }

 /* =========================================
щоденні витрати у січні 2016 (пісне)
========================================== */
                if (d.spending_p > 0) {
                    d3.select("div.text").append("p").attr("class", "temporary")
                        .html("<span>пісне – <b>" + d.spending_p + " тис. тонн</span></b>");
                }else if (d.spending_g == 0) {
                    d3.select("div.text").append("p").attr("class", "temporary")
                        .html("<span>пісне – <b>немає даних</span></b>");
                }


/* =========================================
position sticky
========================================== */
                d3.select("div.col-sm-4.col-md-3.col-lg-3.col-xl-2").classed("sticky", true);
            }

        });


        d3.select("#button-return")
            .classed("hidden-return", false);
    });


};

d3.select("input#button-return").on("click", function () {
    window.location.reload()
});

