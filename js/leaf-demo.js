

var cities = L.layerGroup();


var mbAttr = "&copy;<a href='http://www.openstreetmap.org/copyright'>mapbox</a>";
mbUrl = 'https://api.mapbox.com/styles/v1/evgeshadrozdova/cj7ive7fj5qfw2sr0sa76a748/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXZnZXNoYWRyb3pkb3ZhIiwiYSI6ImNqMjZuaGpkYTAwMXAzMm5zdGVvZ2c0OHYifQ.s8MMs2wW15ZyUfDhTS_cdQ';

var grayscale = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr});

var map = L.map('map', {
    center: [49.0, 32.0],
    zoom: 5,
    layers: [grayscale, cities]
});


var baseLayers = {
    "Grayscale": grayscale
};

var overlays = {
    "Cities": cities
};


var jUrl = "data/stations_ids.csv";



var redPoint = L.icon({
    iconUrl: 'img/red.svg',
    iconSize:     [20, 20], // size of the icon

    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location

    popupAnchor:  [-10, -10] // point from which the popup should open relative to the iconAnchor
});

var greenPoint = L.icon({
    iconUrl: 'img/green.svg',
    iconSize:     [20, 20], // size of the icon

    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location

    popupAnchor:  [-10, -10] // point from which the popup should open relative to the iconAnchor
});


// d3.csv(jUrl, function(data) {
//
//     console.log(data);
//
//     for ( var i=0; i < data.length; ++i )
//     {
//         L.marker( [data[i].latitude, data[i].longitude], {icon: redPoint, opacity: 0.5})
//             // .bindPopup( '<a href="' + data[i].url + '" target="_blank">' + data[i].name + '</a>' )
//             .addTo( map );
//     }
//
//
// });

// $(window).on("resize", function () { $('#map').height($(window).height()); map.invalidateSize(); }).trigger("resize");
