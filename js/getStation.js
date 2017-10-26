var getStation = function(stat) {

     if (stat === 'a_a' || stat === 'a_g' ) {
         d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
         d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
         map.setView(new L.LatLng(49.207883, 24.666714), 6);
         L.marker([49.207883, 24.666714], {icon: yellowPoint}).bindTooltip("Бурштинська ТЕС", {
             permanent: true,
             direction: 'right'
         }).addTo(cities);
         d3.selectAll("p.temporary").remove();
         d3.select("div.text").append("p").attr("class","temporary")
             .html("<b>100 тис. тонн<span>–  мінімальний залишок вугілля для функціовання (газове вугілля)</span></b>");
         d3.select("div.text").append("p").attr("class","temporary")
             .html("<b>610 тис. тонн<span>– максимальне  завантаження складів (газове вугілля)</span></b>");
         d3.select("div.text").append("p").attr("class","temporary")
             .html("<b>ДТЕК, Рінат Ахметов <span> – власник</span></b>");
         d3.select("div.text").append("p").attr("class","temporary")
             .html("<b>газове вугілля –  13,1 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
             .attr("font-size", "0.6vh");
         d3.select("div.col-sm-4.col-md-3.col-lg-3.col-xl-2").classed("sticky", true);
     }

        if (stat === 'b_a' || stat === 'b_g' ) {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(48.463149, 38.202597), 6);
            L.marker([48.463149, 38.202597], {icon: yellowPoint}).bindTooltip("Вуглегірська ТЕС", {
                permanent: true,
                direction: 'right'
            }).addTo(cities);
            d3.selectAll("p.temporary").remove();
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>100 тис. тонн<span>–  мінімальний залишок вугілля для функціовання (газове вугілля)</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>325 тис. тонн<span>– максимальне  завантаження складів (газове вугілля)</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>ПАТ «Центренерго» , держава <span>– власник</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>газове вугілля –  6,0 тис. тонн<span> щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div.col-sm-4.col-md-3.col-lg-3.col-xl-2").classed("sticky", true);
        }

        if (stat === 'c_a' || stat === 'c_g') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(50.446638, 30.639666), 6);
            L.marker([50.446638, 30.639666], {icon: yellowPoint}).bindTooltip("Дарницька ТЕС", {
                permanent: true,
                direction: 'right'
            }).addTo(cities);
            d3.selectAll("p.temporary").remove();
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>немає даних <span> – максимальне  завантаження складів</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>немає даних <span> –  мінімальний залишок вугілля для функціовання</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>ТОВ «Євро– Реконструкція», Анатолій Шкрібляк  <span>– власник</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>антрацит – 1,7 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div.col-sm-4.col-md-3.col-lg-3.col-xl-2").classed("sticky", true);

        }

        if(stat ==='e_a' || stat === 'e_g') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(47.5086, 34.6256), 6);
            L.marker([47.5086, 34.6256], {icon: yellowPoint}).bindTooltip("Запорізька ТЕС", {
                permanent: true,
                direction: 'right'
            }).addTo(cities);
            d3.selectAll("p.temporary").remove();
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>100 тис. тонн<span>–  мінімальний залишок вугілля для функціовання (газове вугілля)</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>310 тис. тонн<span>– максимальне  завантаження складів (газове вугілля)</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>ДТЕК, Рінат Ахметов <span>– власник</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>газове вугілля –  5,3 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
             .attr("font-size", "0.6vh");
            d3.select("div.col-sm-4.col-md-3.col-lg-3.col-xl-2").classed("sticky", true);
        }

        if(stat === 'g_a' || stat === 'g_g') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(49.071129,24.319353), 6);
            L.marker([49.071129,24.319353], {icon: yellowPoint}).bindTooltip("Калуська ТЕС", {
                permanent: true,
                direction: 'right'
            }).addTo(cities);
            d3.selectAll("p.temporary").remove();
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>немає даних <span>– максимальне  завантаження складів </span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html( "<b>немає даних <span>–  мінімальний залишок вугілля для функціовання </span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>«УкрІнтерЕнерго», держава <span>– власник</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b> газове вугілля – 1,0 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div.col-sm-4.col-md-3.col-lg-3.col-xl-2").classed("sticky", true);
        }

        if(stat ==='i_a' || stat === 'i_g') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(48.747775,37.573545), 6);
        L.marker([48.747775,37.573545], {icon: yellowPoint}).bindTooltip("Краматорська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p.temporary").remove();
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>немає даних <span>– максимальне  завантаження складів </span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>немає даних <span>–мінімальний залишок вугілля для функціовання </span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>«Contour Global», Нью-Йорк; Краматорська міська рада <span>–власник</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>антрацит – 1,0 тис. тонн <span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div.col-sm-4.col-md-3.col-lg-3.col-xl-2").classed("sticky", true);
        }

        if(stat === 'j_a' || stat === 'j_g' || stat === 'j_p') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(47.566448,33.64328), 6);
        L.marker([47.566448,33.64328], {icon: yellowPoint}).bindTooltip("Криворізька ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p.temporary").remove();
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>120 тис. тонн<span>–  мінімальний залишок вугілля для функціовання (пісне вугілля)</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>550 тис. тонн<span>– максимальне  завантаження складів (пісне вугілля)</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>ДТЕК, Рінат Ахметов <span>– власник</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>пісне вугілля –  4,5 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div.col-sm-4.col-md-3.col-lg-3.col-xl-2").classed("sticky", true);
        }

        if(stat === 'k_a' || stat === 'k_g') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(47.99459,37.237741), 6);
        L.marker([47.99459,37.237741], {icon: yellowPoint}).bindTooltip("Курахівська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p.temporary").remove();
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>100 тис. тонн<span>–  мінімальний залишок вугілля для функціовання (газове вугілля)</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>583 тис. тонн<span>– максимальне  завантаження складів (газове вугілля)</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>ДТЕК, Рінат Ахметов – власник</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>газове вугілля –  8,9 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div.col-sm-4.col-md-3.col-lg-3.col-xl-2").classed("sticky", true);
        }

        if(stat === 'l_a'|| stat === 'l_g') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(48.706825,29.220188), 6);
        L.marker([48.706825,29.220188], {icon: yellowPoint}).bindTooltip("Ладижинська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p.temporary").remove();
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>100 тис. тонн<span>–  мінімальний залишок вугілля для функціовання (газове вугілля)</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>488 тис. тонн<span>– максимальне  завантаження складів (газове вугілля)</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>ДТЕК, Рінат Ахметов <span>– власник</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>газове вугілля –  5,4 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div.col-sm-4.col-md-3.col-lg-3.col-xl-2").classed("sticky", true);
        }

        if(stat ==='m_a'|| stat === 'm_g') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(48.748741,39.260899), 6);
        L.marker([48.748741,39.260899], {icon: yellowPoint}).bindTooltip("Луганська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p.temporary").remove();
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>50 тис. тонн<span>– мінімальний залишок вугілля для функціовання (антрацит)</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>820 тис. тонн<span> – максимальне завантаження складів (антрацит)</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>«УкрІнтерЕнерго», держава  <span>– власник</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>антрацит –  5,8 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div.col-sm-4.col-md-3.col-lg-3.col-xl-2").classed("sticky", true);
        }

        if(stat === 'n_a' || stat === 'n_g') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(48.403499,35.118088), 6);
        L.marker([48.403499,35.118088], {icon: yellowPoint}).bindTooltip("Придніпровська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p.temporary").remove();
            d3.select("div.text").append("p").attr("class","temporary")
            .html("<b>80 тис. тонн  <span>–  мінімальний залишок вугілля для функціовання (антрацит)</span></b>" );
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>410 тис. тонн <span>–  максимальне завантаження складів (антрацит)</span></b>" );
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>ДТЕК, Рінат Ахметов <span>–  власник</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>антрацит – 4,7 тис. тонн <span> –  щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div.col-sm-4.col-md-3.col-lg-3.col-xl-2").classed("sticky", true);
        }

        if(stat === 'o_a'|| stat === 'o_g' ) {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(48.871596,37.764766), 6);
        L.marker([48.871596,37.764766], {icon: yellowPoint}).bindTooltip("Слов'янська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p.temporary").remove();
            d3.select("div.text").append("p").attr("class","temporary")
            .html("<b>40 тис. тонн<span>–  мінімальний залишок вугілля для функціовання (антрацит)</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>350 тис. тонн<span>–  максимальне завантаження складів (антрацит)</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>ПАТ «ДОНБАСЕНЕРГО», Олександр Янукович <span> –  власник</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>антрацит – 4,4 тис. тонн<span> –  щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div.col-sm-4.col-md-3.col-lg-3.col-xl-2").classed("sticky", true);
        }

        if(stat === 'q_a' || stat === 'q_g') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(49.797068,36.590277), 6);
        L.marker([49.797068,36.590277], {icon: yellowPoint}).bindTooltip("ТЕЦ-2 (Есхар) ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p.temporary").remove();
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>немає даних <span>– максимальне  завантаження складів </span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>немає даних <span>–  мінімальний залишок вугілля для функціовання </span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>ДВ «Нафтогазовидобувна компанія», Павло Фукс <span>– власник</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>антрацит – 0,6 тис. тонн <span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div.col-sm-4.col-md-3.col-lg-3.col-xl-2").classed("sticky", true);
        }

        if(stat === 'r_a'|| stat === 'r_g') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(50.134847,30.745404), 6);
        L.marker([50.134847,30.745404], {icon: yellowPoint}).bindTooltip("Трипільська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p.temporary").remove();
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>100 тис. тонн<span>–  мінімальний залишок вугілля для функціовання (антрацит)</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>282 тис. тонн<span>–  максимальне завантаження складів (антрацит)</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>ПАТ «Центренерго» , держава <span>–  власник</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>антрацит – 4,9 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div.col-sm-4.col-md-3.col-lg-3.col-xl-2").classed("sticky", true);
        }

        if(stat === 's_a'|| stat === 's_g') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(49.386221,32.060906), 6);
        L.marker([49.386221,32.060906], {icon: yellowPoint}).bindTooltip("Черкаська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p.temporary").remove();
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>немає даних <span>– максимальне  завантаження складів </span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>немає даних <span>–  мінімальний залишок вугілля для функціовання </span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>ПАТ «Черкаське хімволокно», Анатолій Шкрібляк <span>– власник</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>газову вугілля – 1,5 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div.col-sm-4.col-md-3.col-lg-3.col-xl-2").classed("sticky", true);
        }

        if(stat === 't_a'|| stat === 't_g') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(51.455278,31.262222), 6);
        L.marker([51.455278,31.262222], {icon: yellowPoint}).bindTooltip("Чернігівська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p.temporary").remove();
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>немає даних <span>– максимальне  завантаження складів </span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>немає даних <span>–  мінімальний залишок вугілля для функціовання </span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b> Чернігівська міська рада, в оренді ТОВ «ЧФірма «ТехНова», Анатолій Шкрібляк <span>– власник</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>антрацит – 1,6 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div.col-sm-4.col-md-3.col-lg-3.col-xl-2").classed("sticky", true);
        }

        if(stat === 'y') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(49.5865,36.52525), 6);
        L.marker([49.5865,36.52525], {icon: yellowPoint}).bindTooltip("Зміївська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p.temporary").remove();
            d3.select("div.text").append("p").attr("class","temporary")
            .html("<b>немає даних<span>– мінімальний залишок вугілля для функціовання (антрацит)</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>немає даних<span>– максимальне завантаження складів (антрацит)</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>ПАТ «Центренерго», держава <span>– власник</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>газове вугілля – 1,2 тис. тонн<span> – щоденні витрати у січні 2016</span></b>")
            .attr("font-size", "0.6vh");
            d3.select("div.col-sm-4.col-md-3.col-lg-3.col-xl-2").classed("sticky", true);
        }

     if(stat === 'v_a'|| stat === 'v_g') {
         d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
         d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
         map.setView(new L.LatLng(49.5865,36.52525), 6);
         L.marker([49.5865,36.52525], {icon: yellowPoint}).bindTooltip("Зміївська ТЕС", {
             permanent: true,
             direction: 'right'
         }).addTo(cities);
         d3.selectAll("p.temporary").remove();
         d3.select("div.text").append("p").attr("class","temporary")
             .html("<b>80 тис. тонн<span>– мінімальний залишок вугілля для функціовання (антрацит)</span></b>");
         d3.select("div.text").append("p").attr("class","temporary")
             .html("<b>445 тис. тонн<span>– максимальне завантаження складів (антрацит)</span></b>");
         d3.select("div.text").append("p").attr("class","temporary")
             .html("<b>ПАТ «Центренерго», держава <span>– власник</span></b>");
         d3.select("div.text").append("p").attr("class","temporary")
             .html("<b>антрацит –  3,8 тис. тонн<span> – щоденні витрати у січні 2016</span></b>")
             .attr("font-size", "0.6vh");
         d3.select("div.col-sm-4.col-md-3.col-lg-3.col-xl-2").classed("sticky", true);
     }

     if(stat === 'x_a'|| stat === 'x_g') {
         d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
         d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
         map.setView(new L.LatLng(48.480556,38.289722), 6);
         L.marker([49.5865,36.52525], {icon: yellowPoint}).bindTooltip("Миронівська ТЕС", {
             permanent: true,
             direction: 'right'
         }).addTo(cities);
         d3.selectAll("p.temporary").remove();
         d3.select("div.text").append("p").attr("class","temporary")
             .html("<b>немає даних –  мінімальний залишок вугілля для функціовання</span></b>");
         d3.select("div.text").append("p").attr("class","temporary")
             .html("<b>антрацит –  90 тис. тонн <span>– максимальне  завантаження складів</span></b>");
         d3.select("div.text").append("p").attr("class","temporary")
             .html("<b>ДТЕК, Рінат Ахметов <span>– власник</span></b>");
         d3.select("div.text").append("p").attr("class","temporary")
             .html("<b>антрацит – 0,7 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
             .attr("font-size", "0.6vh");
         d3.select("div.col-sm-4.col-md-3.col-lg-3.col-xl-2").classed("sticky", true);
     }

     if(stat === 'f') {
         d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
         d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
         map.setView(new L.LatLng(48.480556,38.289722), 6);
         L.marker([49.5865,36.52525], {icon: yellowPoint}).bindTooltip("Миронівська ТЕС", {
             permanent: true,
             direction: 'right'
         }).addTo(cities);
         d3.selectAll("p.temporary").remove();
         d3.select("div.text").append("p").attr("class","temporary")
             .html("<b>немає даних –  мінімальний залишок вугілля для функціовання</span></b>");
         d3.select("div.text").append("p").attr("class","temporary")
             .html("<b>антрацит –  90 тис. тонн <span>– максимальне  завантаження складів</span></b>");
         d3.select("div.text").append("p").attr("class","temporary")
             .html("<b>ДТЕК, Рінат Ахметов <span>– власник</span></b>");
         d3.select("div.text").append("p").attr("class","temporary")
             .html("<b>газове вугілля – 0,5 тис. тонн <span>– щоденні витрати у січні 2016</span></b>")
             .attr("font-size", "0.6vh");
         d3.select("div.col-sm-4.col-md-3.col-lg-3.col-xl-2").classed("sticky", true);
     }

        if(stat === 'z_a'|| stat === 'z_g') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(50.219662,24.373773), 6);
            L.marker([50.219662,24.373773], {icon: yellowPoint}).bindTooltip("Добротвірська ТЕС", {
                permanent: true,
                direction: 'right'
            }).addTo(cities);
            d3.selectAll("p.temporary").remove();
            d3.select("div.text").append("p").attr("class","temporary")
             .html("<b>40 тис. тонн<span>–  мінімальний залишок вугілля для функціовання (газове вугілля)</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>220 тис. тонн<span>– максимальне  завантаження складів (газове вугілля)</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>ДТЕК, Рінат Ахметов <span>– власник</span></b>");
            d3.select("div.text").append("p").attr("class","temporary")
                .html("<b>газове вугілля –  3,2 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div.col-sm-4.col-md-3.col-lg-3.col-xl-2").classed("sticky", true);

        }

             d3.select("#button-return")
                 .classed("hidden-return", false);

};

 d3.select("input#button-return").on("click", function() {
     window.location.reload()
 });

