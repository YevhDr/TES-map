 var getStation = function(stat) {

        if (stat === 'a') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(49.207883, 24.666714), 6);
            L.marker([49.207883, 24.666714], {icon: greenPoint}).bindTooltip("Бурштинська ТЕС", {
                permanent: true,
                direction: 'right'
            }).addTo(cities);
            d3.selectAll("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary")
                .html("<b>100 тис. тонн<span>–  мінімальний залишок вугілля для функціовання (газове вугілля)</span></b>"+ "<br/>"+
                "<b>610 тис. тонн<span>– максимальне  завантаження складів (газове вугілля)</span></b>"+ "<br/>"+
                "<b>ДТЕК, Рінат Ахметов <span> – власник</span></b>"+ "<br/>"+
                "<b>газове вугілля –  13,1 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div#table").style("overflow", "auto").style("height", "300px");
        }

        if (stat === 'b') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(48.463149, 38.202597), 6);
            L.marker([48.463149, 38.202597], {icon: greenPoint}).bindTooltip("Вуглегірська ТЕС", {
                permanent: true,
                direction: 'right'
            }).addTo(cities);
            d3.selectAll("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary")
                .html("<b>100 тис. тонн<span>–  мінімальний залишок вугілля для функціовання (газове вугілля)</span></b>"+ "<br/>"+
            "<b>325 тис. тонн<span>– максимальне  завантаження складів (газове вугілля)</span></b>"+ "<br/>"+
            "<b>ПАТ «Центренерго» , держава <span>– власник</span></b>"+ "<br/>"+
             "<b>газове вугілля –  6,0 тис. тонн<span> щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div#table").style("overflow", "auto").style("height", "300px");
        }

        if (stat === 'c') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(50.446638, 30.639666), 6);
            L.marker([50.446638, 30.639666], {icon: greenPoint}).bindTooltip("Дарницька ТЕС", {
                permanent: true,
                direction: 'right'
            }).addTo(cities);
            d3.selectAll("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary")
                .html("<b>немає даних <span> – максимальне  завантаження складів</span></b>"+ "<br/>" +
                    "<b>немає даних <span> –  мінімальний залишок вугілля для функціовання</span></b>"+ "<br/>" +
                    "<b>ТОВ «Євро– Реконструкція», Анатолій Шкрібляк  <span>– власник</span></b>"+ "<br/>" +
                    "<b>антрацит – 1,7 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div#table").style("overflow", "auto").style("height", "300px");

        }

        if(stat ==='e') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(47.5086, 34.6256), 6);
            L.marker([47.5086, 34.6256], {icon: greenPoint}).bindTooltip("Запорізька ТЕС", {
                permanent: true,
                direction: 'right'
            }).addTo(cities);
            d3.selectAll("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary")
                .html("<b>100 тис. тонн<span>–  мінімальний залишок вугілля для функціовання (газове вугілля)</span></b>"+ "<br/>"+
            "<b>310 тис. тонн<span>– максимальне  завантаження складів (газове вугілля)</span></b>"+ "<br/>"+
            "<b>ДТЕК, Рінат Ахметов <span>– власник</span></b>"+ "<br/>"+
            "<b>газове вугілля –  5,3 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
             .attr("font-size", "0.6vh");
            d3.select("div#table").style("overflow", "auto").style("height", "300px");
        }

        if(stat === 'g') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(49.071129,24.319353), 6);
            L.marker([49.071129,24.319353], {icon: greenPoint}).bindTooltip("Калуська ТЕС", {
                permanent: true,
                direction: 'right'
            }).addTo(cities);
            d3.selectAll("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary")
                .html("<b>немає даних <span>– максимальне  завантаження складів </span></b>"+ "<br/>" +
                    "<b>немає даних <span>–  мінімальний залишок вугілля для функціовання </span></b>"+ "<br/>"+
                    "<b>«УкрІнтерЕнерго», держава <span>– власник</span></b>"+ "<br/>"+
                    "<b> газове вугілля – 1,0 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div#table").style("overflow", "auto").style("height", "300px");
        }

        if(stat ==='i') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(48.747775,37.573545), 6);
        L.marker([48.747775,37.573545], {icon: redPoint}).bindTooltip("Краматорська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary")
                .html("<b>немає даних <span>– максимальне  завантаження складів </span></b>"+ "<br/>"+
            "<b>немає даних <span>–мінімальний залишок вугілля для функціовання </span></b>"+ "<br/>"+
            "<b>«Contour Global», Нью-Йорк; Краматорська міська рада <span>–власник</span></b>"+ "<br/>"+
            "<b>антрацит – 1,0 тис. тонн <span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div#table").style("overflow", "auto").style("height", "300px");
        }

        if(stat === 'j') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(47.566448,33.64328), 6);
        L.marker([47.566448,33.64328], {icon: greenPoint}).bindTooltip("Криворізька ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary")
                .html("<b>120 тис. тонн<span>–  мінімальний залишок вугілля для функціовання (пісне вугілля)</span></b>"+ "<br/>"+
            "<b>550 тис. тонн<span>– максимальне  завантаження складів (пісне вугілля)</span></b>"+ "<br/>"+
            "<b>ДТЕК, Рінат Ахметов <span>– власник</span></b>"+ "<br/>"+
            "<b>пісне вугілля –  4,5 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div#table").style("overflow", "auto").style("height", "300px");
        }

        if(stat === 'k') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(47.99459,37.237741), 6);
        L.marker([47.99459,37.237741], {icon: greenPoint}).bindTooltip("Курахівська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary")
                .html("<b>100 тис. тонн<span>–  мінімальний залишок вугілля для функціовання (газове вугілля)</span></b>"+ "<br/>"+
                    "<b>583 тис. тонн<span>– максимальне  завантаження складів (газове вугілля)</span></b>"+ "<br/>"+
                    "<b>ДТЕК, Рінат Ахметов – власник</span></b>"+ "<br/>"+
                    "<b>газове вугілля –  8,9 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div#table").style("overflow", "auto").style("height", "300px");
        }

        if(stat === 'l') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(48.706825,29.220188), 6);
        L.marker([48.706825,29.220188], {icon: greenPoint}).bindTooltip("Ладижинська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary")
                .html("<b>100 тис. тонн<span>–  мінімальний залишок вугілля для функціовання (газове вугілля)</span></b>"+ "<br/>"+
            "<b>488 тис. тонн<span>– максимальне  завантаження складів (газове вугілля)</span></b>"+ "<br/>"+
            "<b>ДТЕК, Рінат Ахметов <span>– власник</span></b>"+ "<br/>"+
            "<b>газове вугілля –  5,4 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div#table").style("overflow", "auto").style("height", "300px");
        }

        if(stat ==='m') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(48.748741,39.260899), 6);
        L.marker([48.748741,39.260899], {icon: greenPoint}).bindTooltip("Луганська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary")
                .html("<b>50 тис. тонн<span>– мінімальний залишок вугілля для функціовання (антрацит)</span></b>"+ "<br/>"+
                 "<b>820 тис. тонн<span> – максимальне завантаження складів (антрацит)</span></b>"+ "<br/>"+
                 "<b>«УкрІнтерЕнерго», держава  <span>– власник</span></b>"+ "<br/>"+
                 "<b>антрацит –  5,8 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div#table").style("overflow", "auto").style("height", "300px");
        }

        if(stat === 'n') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(48.403499,35.118088), 6);
        L.marker([48.403499,35.118088], {icon: redPoint}).bindTooltip("Придніпровська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary")
            .html("<b>80 тис. тонн  <span>–  мінімальний залишок вугілля для функціовання (антрацит)</span></b>" + "<br/>" +
            "<b>410 тис. тонн <span>–  максимальне завантаження складів (антрацит)</span></b>" + "<br/>" +
            "<b>ДТЕК, Рінат Ахметов <span>–  власник</span></b>" + "<br/>" +
            "<b>антрацит – 4,7 тис. тонн <span> –  щоденні витрати у січні 2016</span></b>").attr("font-size", "0.6vh");
            d3.select("div#table").style("overflow", "auto").style("height", "300px");
        }

        if(stat === 'o') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(48.871596,37.764766), 6);
        L.marker([48.871596,37.764766], {icon: greenPoint}).bindTooltip("Слов'янська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary")
            .html("<b>40 тис. тонн<span>–  мінімальний залишок вугілля для функціовання (антрацит)</span></b>"+ "<br/>"+
            "<b>350 тис. тонн<span>–  максимальне завантаження складів (антрацит)</span></b>"+ "<br/>"+
            "<b>ПАТ «ДОНБАСЕНЕРГО», Олександр Янукович <span> –  власник</span></b>"+ "<br/>"+
            "<b>антрацит – 4,4 тис. тонн<span> –  щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div#table").style("overflow", "auto").style("height", "300px");
        }

        if(stat === 'q') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(49.797068,36.590277), 6);
        L.marker([49.797068,36.590277], {icon: greenPoint}).bindTooltip("ТЕЦ-2 (Есхар) ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary")
                .html("<b>немає даних <span>– максимальне  завантаження складів </span></b>"+ "<br/>" +
                    "<b>немає даних <span>–  мінімальний залишок вугілля для функціовання </span></b>"+ "<br/>" +
                    "<b>ДВ «Нафтогазовидобувна компанія», Павло Фукс <span>– власник</span></b>"+ "<br/>"+
                    "<b>антрацит – 0,6 тис. тонн <span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div#table").style("overflow", "auto").style("height", "300px");
        }

        if(stat === 'r') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(50.134847,30.745404), 6);
        L.marker([50.134847,30.745404], {icon: redPoint}).bindTooltip("Трипільська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary")
                .html("<b>100 тис. тонн<span>–  мінімальний залишок вугілля для функціовання (антрацит)</span></b>"+ "<br/>"+
            "<b>282 тис. тонн<span>–  максимальне завантаження складів (антрацит)</span></b>"+ "<br/>"+
            "<b>ПАТ «Центренерго» , держава <span>–  власник</span></b>"+ "<br/>"+
            "<b>антрацит – 4,9 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div#table").style("overflow", "auto").style("height", "300px");
        }

        if(stat === 's') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(49.386221,32.060906), 6);
        L.marker([49.386221,32.060906], {icon: greenPoint}).bindTooltip("Черкаська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary")
                .html("<b>немає даних <span>– максимальне  завантаження складів </span></b>"+ "<br/>" +
                    "<b>немає даних <span>–  мінімальний залишок вугілля для функціовання </span></b>"+ "<br/>" +
                    "<b>ПАТ «Черкаське хімволокно», Анатолій Шкрібляк <span>– власник</span></b>"+ "<br/>" +
                    "<b>газову вугілля – 1,5 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div#table").style("overflow", "auto").style("height", "300px");
        }

        if(stat === 't') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(51.455278,31.262222), 6);
        L.marker([51.455278,31.262222], {icon: greenPoint}).bindTooltip("Чернігівська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary")
                .html("<b>немає даних <span>– максимальне  завантаження складів </span></b>"+ "<br/>"+
                    "<b>немає даних <span>–  мінімальний залишок вугілля для функціовання </span></b>"+ "<br/>"+
                    "<b> Чернігівська міська рада, в оренді ТОВ «ЧФірма «ТехНова», Анатолій Шкрібляк <span>– власник</span></b>"+ "<br/>"+
            "<b>антрацит – 1,6 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div#table").style("overflow", "auto").style("height", "300px");
        }

        if(stat === 'y') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(49.5865,36.52525), 6);
        L.marker([49.5865,36.52525], {icon: greenPoint}).bindTooltip("Зміївська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.selectAll("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary")
            .html("<b>немає даних<span>– мінімальний залишок вугілля для функціовання (антрацит)</span></b>"+ "<br/>"+
            "<b>немає даних<span>– максимальне завантаження складів (антрацит)</span></b>"+ "<br/>"+
            "<b>ПАТ «Центренерго», держава <span>– власник</span></b>"+ "<br/>"+
            "<b>газове вугілля – 1,2 тис. тонн<span> – щоденні витрати у січні 2016</span></b>")
            .attr("font-size", "0.6vh");
            d3.select("div#table").style("overflow", "auto").style("height", "300px");
        }

     if(stat === 'v') {
         d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
         d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
         map.setView(new L.LatLng(49.5865,36.52525), 6);
         L.marker([49.5865,36.52525], {icon: greenPoint}).bindTooltip("Зміївська ТЕС", {
             permanent: true,
             direction: 'right'
         }).addTo(cities);
         d3.selectAll("p#temporary").remove();
         d3.select("div.text").append("p").attr("id","temporary")
             .html("<b>80 тис. тонн<span>– мінімальний залишок вугілля для функціовання (антрацит)</span></b>"+ "<br/>"+
                 "<b>445 тис. тонн<span>– максимальне завантаження складів (антрацит)</span></b>"+ "<br/>"+
                 "<b>ПАТ «Центренерго», держава <span>– власник</span></b>"+ "<br/>"+
                 "<b>антрацит –  3,8 тис. тонн<span> – щоденні витрати у січні 2016</span></b>")
             .attr("font-size", "0.6vh");
         d3.select("div#table").style("overflow", "auto").style("height", "300px");
     }

     if(stat === 'x') {
         d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
         d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
         map.setView(new L.LatLng(48.480556,38.289722), 6);
         L.marker([49.5865,36.52525], {icon: redPoint}).bindTooltip("Миронівська ТЕС", {
             permanent: true,
             direction: 'right'
         }).addTo(cities);
         d3.selectAll("p#temporary").remove();
         d3.select("div.text").append("p").attr("id","temporary")
             .html("<b>немає даних –  мінімальний залишок вугілля для функціовання</span></b>"+ "<br/>"+
         "<b>антрацит –  90 тис. тонн <span>– максимальне  завантаження складів</span></b>"+ "<br/>" +
         "<b>ДТЕК, Рінат Ахметов <span>– власник</span></b>"+ "<br/>"+
         "<b>антрацит – 0,7 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
             .attr("font-size", "0.6vh");
         d3.select("div#table").style("overflow", "auto").style("height", "300px");
     }

     if(stat === 'f') {
         d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
         d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
         map.setView(new L.LatLng(48.480556,38.289722), 6);
         L.marker([49.5865,36.52525], {icon: redPoint}).bindTooltip("Миронівська ТЕС", {
             permanent: true,
             direction: 'right'
         }).addTo(cities);
         d3.selectAll("p#temporary").remove();
         d3.select("div.text").append("p").attr("id","temporary")
             .html("<b>немає даних –  мінімальний залишок вугілля для функціовання</span></b>"+ "<br/>"+
                 "<b>антрацит –  90 тис. тонн <span>– максимальне  завантаження складів</span></b>"+ "<br/>" +
                 "<b>ДТЕК, Рінат Ахметов <span>– власник</span></b>"+ "<br/>"+
                 "<b>газове вугілля – 0,5 тис. тонн <span>– щоденні витрати у січні 2016</span></b>")
             .attr("font-size", "0.6vh");
         d3.select("div#table").style("overflow", "auto").style("height", "300px");
     }

        if(stat === 'z') {
            d3.selectAll("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.selectAll("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(50.219662,24.373773), 6);
            L.marker([50.219662,24.373773], {icon: greenPoint}).bindTooltip("Добротвірська ТЕС", {
                permanent: true,
                direction: 'right'
            }).addTo(cities);
            d3.selectAll("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary")
             .html("<b>40 тис. тонн<span>–  мінімальний залишок вугілля для функціовання (газове вугілля)</span></b>"+ "<br/>"+
             "<b>220 тис. тонн<span>– максимальне  завантаження складів (газове вугілля)</span></b>"+ "<br/>"+
             "<b>ДТЕК, Рінат Ахметов <span>– власник</span></b>"+ "<br/>"+
             "<b>газове вугілля –  3,2 тис. тонн<span>– щоденні витрати у січні 2016</span></b>")
                .attr("font-size", "0.6vh");
            d3.select("div#table").style("overflow", "auto").style("height", "300px");

        }


};
