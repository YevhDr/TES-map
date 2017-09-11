 var getStation = function(stat) {
        if (stat === 'a') {
            map.setView(new L.LatLng(49.207883, 24.666714), 6);
            L.marker([49.207883, 24.666714], {icon: greenPoint}).bindTooltip("Бурштинська ТЕС", {
                permanent: true,
                direction: 'right'
            }).addTo(map);
        }
        if (stat === 'b') {
            map.setView(new L.LatLng(48.463149, 38.202597), 6);
            L.marker([48.463149, 38.202597], {icon: greenPoint}).bindTooltip("Вуглегірська ТЕС", {
                permanent: true,
                direction: 'right'
            }).addTo(map);
        }

        if (stat === 'c') {
            map.setView(new L.LatLng(50.446638, 30.639666), 6);
            L.marker([50.446638, 30.639666], {icon: greenPoint}).bindTooltip("Дарницька ТЕС", {
                permanent: true,
                direction: 'right'
            }).addTo(map);
        }

        if(stat ==='e') {
            map.setView(new L.LatLng(47.5086, 34.6256), 6);
            L.marker([47.5086, 34.6256], {icon: greenPoint}).bindTooltip("Запорізька ТЕС", {
                permanent: true,
                direction: 'right'
            }).bindPopup("ла-ла-ла").addTo(map);
        }

        if(stat === 'g') {
            map.setView(new L.LatLng(49.071129,24.319353), 6);
            L.marker([49.071129,24.319353], {icon: greenPoint}).bindTooltip("Калуська ТЕС", {
                permanent: true,
                direction: 'right'
            }).addTo(map);
        }

        if(stat ==='i') {
            map.setView(new L.LatLng(48.747775,37.573545), 6);
        L.marker([48.747775,37.573545], {icon: greenPoint}).bindTooltip("Краматорська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(map);
        }

        if(stat === 'j') {
            map.setView(new L.LatLng(47.566448,33.64328), 6);
        L.marker([47.566448,33.64328], {icon: greenPoint}).bindTooltip("Криворізька ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(map);
        }

        if(stat === 'k') {
            map.setView(new L.LatLng(47.99459,37.237741), 6);
        L.marker([47.99459,37.237741], {icon: greenPoint}).bindTooltip("Курахівська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(map);
        }

        if(stat === 'l') {
            map.setView(new L.LatLng(48.706825,29.220188), 6);
        L.marker([48.706825,29.220188], {icon: greenPoint}).bindTooltip("Ладижинська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(map);
        }

        if(stat ==='m') {
            map.setView(new L.LatLng(48.748741,39.260899), 6);
        L.marker([48.748741,39.260899], {icon: greenPoint}).bindTooltip("Луганська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(map);
        }

        if(stat === 'n') {
            map.setView(new L.LatLng(48.403499,35.118088), 6);
        L.marker([48.403499,35.118088], {icon: greenPoint}).bindTooltip("Придніпровська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(map);
        }

        if(stat === 'o') {
            map.setView(new L.LatLng(48.871596,37.764766), 6);
        L.marker([48.871596,37.764766], {icon: greenPoint}).bindTooltip("Слов'янська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(map);
        }

        if(stat === 'p') {
            map.setView(new L.LatLng(47.799096,38.004681), 6);
        L.marker([47.799096,38.004681], {icon: greenPoint}).bindTooltip("Старобешівська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(map);
        }

        if(stat === 'q') {
            map.setView(new L.LatLng(49.797068,36.590277), 6);
        L.marker([49.797068,36.590277], {icon: greenPoint}).bindTooltip("ТЕЦ-2 (Есхар) ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(map);
        }

        if(stat === 'r') {
            map.setView(new L.LatLng(50.134847,30.745404), 6);
        L.marker([50.134847,30.745404], {icon: greenPoint}).bindTooltip("Трипільська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(map);
        }

        if(stat === 's') {
            map.setView(new L.LatLng(49.386221,32.060906), 6);
        L.marker([49.386221,32.060906], {icon: greenPoint}).bindTooltip("Черкаська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(map);
        }

        if(stat === 't') {
            map.setView(new L.LatLng(51.455278,31.262222), 6);
        L.marker([51.455278,31.262222], {icon: greenPoint}).bindTooltip("Чернігівська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(map);
        }

        if(stat === 'v') {
            map.setView(new L.LatLng(49.5865,36.52525), 6);
        L.marker([49.5865,36.52525], {icon: greenPoint}).bindTooltip("Зміївська ТЕС", {
            permanent: true,
            direction: 'right'
        }).addTo(map);
        }

        if(stat === 'z') {
            map.setView(new L.LatLng(50.219662,24.373773), 6);
            L.marker([50.219662,24.373773], {icon: greenPoint}).bindTooltip("Бурштинська ТЕС", {
                permanent: true,
                direction: 'right'
            }).bindTooltip("Добротвірська ТЕС", {
                permanent: true,
                    direction: 'right'
            }).addTo(map);

        }

};
