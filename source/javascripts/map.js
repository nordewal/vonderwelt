function Map() {
    $(function () {
        if ($("div#map").length > 0) {
            initMap();
        }
    });
    // When the window has finished loading create our google map below


    function initMap() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 4,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(20, 65),

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{
                "elementType": "geometry",
                "stylers": [{"hue": "#ff4400"}, {"saturation": -68}, {"lightness": -4}, {"gamma": 0.72}]
            }, {"featureType": "road", "elementType": "labels.icon"}, {
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [{"hue": "#0077ff"}, {"gamma": 3.1}]
            }, {
                "featureType": "water",
                "stylers": [{"hue": "#00ccff"}, {"gamma": 0.44}, {"saturation": -33}]
            }, {
                "featureType": "poi.park",
                "stylers": [{"hue": "#44ff00"}, {"saturation": -23}]
            }, {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{"hue": "#007fff"}, {"gamma": 0.77}, {"saturation": 65}, {"lightness": 99}]
            }, {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [{"gamma": 0.11}, {"weight": 5.6}, {"saturation": 99}, {"hue": "#0091ff"}, {"lightness": -86}]
            }, {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{"lightness": -48}, {"hue": "#ff5e00"}, {"gamma": 1.2}, {"saturation": -23}]
            }, {
                "featureType": "transit",
                "elementType": "labels.text.stroke",
                "stylers": [{"saturation": -64}, {"hue": "#ff9100"}, {"lightness": 16}, {"gamma": 0.47}, {"weight": 2.7}]
            }]
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Resize stuff...
        google.maps.event.addDomListener(window, "resize", function () {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });

        // Draw line
        var lineCoords = [
            {lat: 47.54848, lng: 7.79601},
            {lat: 45.49094, lng: 12.23876},
            {lat: 45.64953, lng: 13.77681},
            {lat: 43.50733, lng: 16.43981},
            {lat: 42.65019, lng: 18.09413},
            {lat: 40.64007, lng: 22.94442},
            {lat: 41.00823, lng: 28.97838},
            {lat: 39.85915, lng: 30.56396},
            {lat: 38.64690, lng: 34.82116},
            {lat: 39.69225, lng: 37.06105},
            {lat: 40.91351, lng: 38.38073},
            {lat: 41.00977, lng: 39.70830},
            {lat: 41.61928, lng: 41.63675},
            {lat: 41.98603, lng: 43.59649},
            {lat: 41.71571, lng: 44.82620},
            {lat: 41.60702, lng: 46.63378},
            {lat: 40.63150, lng: 48.65156},
            {lat: 40.41177, lng: 49.86338},
            {lat: 39.55283, lng: 48.96532},
            {lat: 38.43422, lng: 48.86444},
            {lat: 36.32840, lng: 49.99328},
            {lat: 35.60371, lng: 51.41601},
            {lat: 39.76846, lng: 64.45582},
            {lat: 39.62803, lng: 66.97497},
            {lat: 41.52198, lng: 69.39487},
            {lat: 43.22202, lng: 76.85127},
            {lat: 49.33575, lng: 81.58202},
            {lat: 51.20860, lng: 81.11480},
            {lat: 52.51622, lng: 82.73803},
            {lat: 53.35710, lng: 83.82019},
            {lat: 52.03852, lng: 85.91952},
            {lat: 50.76139, lng: 86.12344},
            {lat: 49.98884, lng: 92.05387},
            {lat: 47.88657, lng: 106.90491},
        ];
        var path = new google.maps.Polyline({
            path: lineCoords,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });

        path.setMap(map);
    }

}

module.exports = Map