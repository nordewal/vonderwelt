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

        var infowindow = new google.maps.InfoWindow();

        // Request JSON with GPS points
        $.getJSON("https://1bbd085e69c44879b4aea5ce2016ffff.ds11s3ns.swisscom.com/vonderwelt/coords.json", function(data) {
          $.each(data, function(i, item){
            console.info(item);
            console.info(item['lat']);
            console.info(item['lng']);
            var marker = new google.maps.Marker({
              position: {lat: item['lat'], lng: item['lng']},
              map: map,
              icon: 'https://mt.google.com/vt/icon/name=icons/spotlight/camping_L_8x.png&scale=1',
              title: item['desc']
            });

            google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent("<h4>" + marker.title + "</h4><p>Lat: " + item['lat'] + "<br/>Long: " + item['lng'] + "</p>");
              infowindow.setPosition(marker.position);
              infowindow.open(map);
						})
          });
        });

        // Draw line for planned route
        var lineCoords = [
          {lat: 46.97405, lng:7.44633},
          {lat: 45.49094, lng:12.23876},
          {lat: 45.64953, lng:13.77681},
          {lat: 43.50733, lng:16.43981},
          {lat: 42.65019, lng:18.09413},
          {lat: 40.64007, lng:22.94442},
          {lat: 41.00823, lng:28.97838},
          {lat: 39.85915, lng:30.56396},
          {lat: 38.6469,  lng:34.82116},
          {lat: 39.69225, lng:37.06105},
          {lat: 41.00977, lng:39.7083},
          {lat: 41.61928, lng:41.63675},
          {lat: 41.98603, lng:43.59649},
          {lat: 41.71571, lng:44.8262},
          {lat: 41.60702, lng:46.63378},
          {lat: 40.6315,  lng:48.65156},
          {lat: 40.41177, lng:49.86338},
          {lat: 39.55283, lng:48.96532},
          {lat: 38.43422, lng:48.86444},
          {lat: 36.3284,  lng:49.99328},
          {lat: 35.60371, lng:51.41601},
          {lat: 39.76846, lng:64.45582},
          {lat: 39.62803, lng:66.97497},
          {lat: 41.52198, lng:69.39487},
          {lat: 43.03586, lng: 71.14604},
          {lat: 43.22202, lng:76.85127},
          {lat: 49.33575, lng:81.58202},
          {lat: 51.2086,  lng:81.1148},
          {lat: 52.51622, lng:82.73803},
          {lat: 53.3571,  lng:83.82019},
          {lat: 52.03852, lng:85.91952},
          {lat: 50.76139, lng:86.12344},
          {lat: 49.98884, lng:92.05387},
          {lat: 47.88657, lng:106.90491},
          {lat: 51.96223, lng:108.63817},
          {lat: 52.79802, lng:116.78607},
          {lat: 54.45794, lng:122.1859},
          {lat: 50.23709, lng:129.13061},
          {lat: 48.51584, lng:131.21942},
          {lat: 48.63538, lng:135.17439},
          {lat: 42.81207, lng:132.80346},
          {lat: 36.66841, lng:128.84765},
          {lat: 50.51342, lng:-122.87109},
          {lat: 57.9848,  lng:-132.36328},
          {lat: 60.93043, lng:-142.03125},
          {lat: 61.85614, lng:-149.76562},
          {lat: 64.47279, lng:-155.03906},
          {lat: 68.20421, lng:-149.58984},
          {lat: 66.58321, lng:-140.625},
          {lat: 61.27023, lng:-118.65234},
          {lat: 57.51582, lng:-119.0039},
          {lat: 54.05938, lng:-108.45703},
          {lat: 51.3992,  lng:-99.49218},
          {lat: 44.59046, lng:-87.71484},
          {lat: 37.02009, lng:-76.8164}
        ];
        var path = new google.maps.Polyline({
            path: lineCoords,
            geodesic: true,
            strokeColor: '#545454',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });

        path.setMap(map);


        // Draw line
        var lineCoords2 = [
          {lat: 19.47695, lng:-89.29687},
          {lat: 14.09395, lng:-88.76953},
          {lat: 10.6606,  lng:-84.02343},
          {lat: 8.75479,  lng:-79.27734},
          {lat: 1.23037,  lng:-74.53125}
        ];
        var path2 = new google.maps.Polyline({
            path: lineCoords2,
            geodesic: true,
            strokeColor: '#545454',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });

        path2.setMap(map);
    }

}

module.exports = Map
