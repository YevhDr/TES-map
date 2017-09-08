var map = L.map('map') .setView ([49.0, 32.0], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/evgeshadrozdova/cj5wmvs1o7k7b2rqnesmnxn4z/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXZnZXNoYWRyb3pkb3ZhIiwiYSI6ImNqMjZuaGpkYTAwMXAzMm5zdGVvZ2c0OHYifQ.s8MMs2wW15ZyUfDhTS_cdQ', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',

}).addTo(map);


var jUrl = "data/stations_ids.csv";



var redPoint = L.icon({
    iconUrl: 'img/red.svg',
    iconSize:     [40, 40], // size of the icon

    iconAnchor:   [40, 40], // point of the icon which will correspond to marker's location

    popupAnchor:  [-10, -10] // point from which the popup should open relative to the iconAnchor
});

var greenPoint = L.icon({
    iconUrl: 'img/green.svg',
    iconSize:     [40, 40], // size of the icon

    iconAnchor:   [40, 40], // point of the icon which will correspond to marker's location

    popupAnchor:  [-10, -10] // point from which the popup should open relative to the iconAnchor
});


d3.csv(jUrl, function(data) {

    console.log(data);

    for ( var i=0; i < data.length; ++i )
    {
        L.marker( [data[i].latitude, data[i].longitude], {icon: redPoint, opacity: 0.5})
            .bindPopup( '<a href="' + data[i].url + '" target="_blank">' + data[i].name + '</a>' )
            .addTo( map );
    }


});

