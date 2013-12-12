/*global google, global $*/
"use strict";

function initialize() {
	
	$.getJSON("data/maps_data.json", function (data) {
		
		/** map generation */
		var map = new google.maps.Map(document.getElementById('map-canvas')),
			bounds = new google.maps.LatLngBounds(),
			infowindow = new google.maps.InfoWindow();
		
		if (data.maps_data.length === 1) {
			var myLatlng = new google.maps.LatLng(data.maps_data[0].latitude, data.maps_data[0].longitude),
			
			mapOptions = {
				zoom: 16,
				center: myLatlng
			},
			
			mapSingle = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
			
			/** single marker */
			var markerSingle = new google.maps.Marker({
				position: myLatlng,
				map: mapSingle,
				title: data.maps_data[0].address
			});
			
			google.maps.event.addListener(markerSingle, 'click', function () {
					infowindow.setContent(this.title);
					infowindow.open(mapSingle, this);
				});
		}
		else {
			
			/** few markers */
			for (var i = 0; i < data.maps_data.length; i += 1) {
				var latlng = new google.maps.LatLng(data.maps_data[i].latitude, data.maps_data[i].longitude),
					marker = new google.maps.Marker({
						position: latlng,
						map: map,
						title: data.maps_data[i].address
					});
				
				bounds.extend(latlng);
				
				google.maps.event.addListener(marker, 'click', function () {
					infowindow.setContent(this.title);
					infowindow.open(map, this);
				});
			}
			
			map.fitBounds(bounds);
		}
		
		
	});
}
window.onload = initialize;