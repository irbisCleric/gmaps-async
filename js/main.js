"use strict";

	//var infowindow = new google.maps.InfoWindow();
    //var bounds = new google.maps.LatLngBounds();

//    for (var i = 0; i < locations.length; i++) {
//        var marker = new google.maps.Marker({
//            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
//            map: mapDom,
//			title:"Hello World!"
//        });    
//	}

//        bounds.extend(marker.position);
//		mapDom.fitBounds(bounds);
		
        //google.maps.event.addListener(marker, 'click', (function (marker, i) {
        //    return function () {
        //        infowindow.setContent(locations[i][0]);
        //        infowindow.open(mapDom, marker);
        //    }
        //})(marker, i));
		
    //}

	
function initialize() {
	var LocationData = [
		[49.2812668, -123.1035942, "26 E Hastings St, Vancouver" ],
		[49.2814064, -123.1025187, "71 E Hastings St, Vancouver" ],
		[49.2812336, -123.1020622, "122 E Hastings St, Vancouver" ],
		[49.2813564, -123.1012253, "138 E Hastings St, Vancouver" ],
		[49.2811625, -123.0985032, "242 E Hastings St, Vancouver" ]
	];
	 
	var map = new google.maps.Map(document.getElementById('map-canvas')),
		bounds = new google.maps.LatLngBounds(),
		infowindow = new google.maps.InfoWindow();
	 
	for (var i in LocationData) {
		var p = LocationData[i],
			latlng = new google.maps.LatLng(p[0], p[1]),
			marker = new google.maps.Marker({
				position: latlng,
				map: map,
				title: p[2]
			});
		
		bounds.extend(latlng);
		
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.setContent(this.title);
			infowindow.open(map, this);
		});
	}
	 
	map.fitBounds(bounds);
}
	
window.onload = initialize;