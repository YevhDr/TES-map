 var getStation = function(stat) {

        if (stat === 'a') {
            d3.select("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.select("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(49.207883, 24.666714), 6);
            L.marker([49.207883, 24.666714], {icon: greenPoint}).bindTooltip("Бурштинська ТЕС", {
                permanent: true,
                direction: 'right'
            }).addTo(cities);
            d3.select("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak").attr("font-size", "0.6vh");
        }

        if (stat === 'b') {
            d3.select("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.select("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
             map.setView(new L.LatLng(48.463149, 38.202597), 6);
            L.marker([48.463149, 38.202597], {icon: greenPoint}).bindTooltip("Вуглегірська ТЕС", {
                permanent: true,
                direction: 'right'
            }).addTo(cities);
            d3.select("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak").attr("font-size", "0.6vh");
        }

        if (stat === 'c') {
            d3.select("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.select("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(50.446638, 30.639666), 6);
            L.marker([50.446638, 30.639666], {icon: greenPoint}).bindTooltip("Дарницька ТЕС", {
                permanent: true,
                direction: 'right'
            }).addTo(cities);
            d3.select("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak").attr("font-size", "0.6vh");

        }

        if(stat ==='e') {
            d3.select("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.select("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(47.5086, 34.6256), 6);
            L.marker([47.5086, 34.6256], {icon: greenPoint}).bindTooltip("Запорізька ТЕС", {
                permanent: true,
                direction: 'right'
            }).addTo(cities);
            d3.select("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak").attr("font-size", "0.6vh");
        }

        if(stat === 'g') {
            d3.select("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.select("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(49.071129,24.319353), 6);
            L.marker([49.071129,24.319353], {icon: greenPoint}).bindTooltip("Калуська ТЕС", {
                permanent: true,
                direction: 'right'
            }).addTo(cities);
            d3.select("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak").attr("font-size", "0.6vh");
        }

        if(stat ==='i') {
            d3.select("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.select("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(48.747775,37.573545), 6);
        L.marker([48.747775,37.573545], {icon: redPoint}).bindTooltip("Краматорська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.select("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak").attr("font-size", "0.6vh");
        }

        if(stat === 'j') {
            d3.select("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.select("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(47.566448,33.64328), 6);
        L.marker([47.566448,33.64328], {icon: greenPoint}).bindTooltip("Криворізька ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.select("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak").attr("font-size", "0.6vh");
        }

        if(stat === 'k') {
            d3.select("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.select("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(47.99459,37.237741), 6);
        L.marker([47.99459,37.237741], {icon: greenPoint}).bindTooltip("Курахівська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.select("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak").attr("font-size", "0.6vh");
        }

        if(stat === 'l') {
            d3.select("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.select("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(48.706825,29.220188), 6);
        L.marker([48.706825,29.220188], {icon: greenPoint}).bindTooltip("Ладижинська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.select("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak").attr("font-size", "0.6vh");
        }

        if(stat ==='m') {
            d3.select("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.select("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(48.748741,39.260899), 6);
        L.marker([48.748741,39.260899], {icon: greenPoint}).bindTooltip("Луганська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.select("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak").attr("font-size", "0.6vh");
        }

        if(stat === 'n') {
            d3.select("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.select("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(48.403499,35.118088), 6);
        L.marker([48.403499,35.118088], {icon: redPoint}).bindTooltip("Придніпровська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.select("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak").attr("font-size", "0.6vh");
        }

        if(stat === 'o') {
            d3.select("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.select("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(48.871596,37.764766), 6);
        L.marker([48.871596,37.764766], {icon: greenPoint}).bindTooltip("Слов'янська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.select("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak").attr("font-size", "0.6vh");
        }

        if(stat === 'p') {
            d3.select("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.select("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(47.799096,38.004681), 6);
        L.marker([47.799096,38.004681], {icon: greenPoint}).bindTooltip("Старобешівська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.select("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak").attr("font-size", "0.6vh");
        }

        if(stat === 'q') {
            d3.select("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.select("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(49.797068,36.590277), 6);
        L.marker([49.797068,36.590277], {icon: greenPoint}).bindTooltip("ТЕЦ-2 (Есхар) ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.select("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak").attr("font-size", "0.6vh");
        }

        if(stat === 'r') {
            d3.select("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.select("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(50.134847,30.745404), 6);
        L.marker([50.134847,30.745404], {icon: redPoint}).bindTooltip("Трипільська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.select("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak").attr("font-size", "0.6vh");
        }

        if(stat === 's') {
            d3.select("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.select("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(49.386221,32.060906), 6);
        L.marker([49.386221,32.060906], {icon: greenPoint}).bindTooltip("Черкаська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.select("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak").attr("font-size", "0.6vh");
        }

        if(stat === 't') {
            d3.select("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.select("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(51.455278,31.262222), 6);
        L.marker([51.455278,31.262222], {icon: greenPoint}).bindTooltip("Чернігівська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.select("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak").attr("font-size", "0.6vh");
        }

        if(stat === 'v' || stat === 'y') {
            d3.select("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.select("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(49.5865,36.52525), 6);
        L.marker([49.5865,36.52525], {icon: greenPoint}).bindTooltip("Зміївська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(cities);
            d3.select("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak").attr("font-size", "0.6vh");
        }

     if(stat === 'x'|| stat === 'f') {
         d3.select("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
         d3.select("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
         map.setView(new L.LatLng(48.480556,38.289722), 6);
         L.marker([49.5865,36.52525], {icon: redPoint}).bindTooltip("Миронівська ТЕС", {
             permanent: true,
             direction: 'right'
         }).addTo(cities);
         d3.select("p#temporary").remove();
         d3.select("div.text").append("p").attr("id","temporary").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak").attr("font-size", "0.6vh");
     }

        if(stat === 'z') {
            d3.select("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").remove();
            d3.select("div.leaflet-tooltip.leaflet-zoom-animated.leaflet-tooltip-right").remove();
            map.setView(new L.LatLng(50.219662,24.373773), 6);
            L.marker([50.219662,24.373773], {icon: greenPoint}).bindTooltip("Добротвірська ТЕС", {
                permanent: true,
                direction: 'right'
            }).addTo(cities);
            d3.select("p#temporary").remove();
            d3.select("div.text").append("p").attr("id","temporary").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak").attr("font-size", "0.6vh");

        }


};
