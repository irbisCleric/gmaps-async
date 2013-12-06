/*global google*/
//"use strict";

if(typeof jQuery!=='undefined'){
    console.log('jQuery Loaded');
}
else{
    console.log('not loaded yet');
}

$(function() {
	$.getJSON( "data/maps_data.json", function( data ) {
		var items = [];
		$.each( data, function( key, val ) {
			items.push( "<li id='" + key + "'>" + val + "</li>" );
		});
		$( "<ul/>", {
			"class": "my-new-list",
			html: items.join( "" )
			}).appendTo( "body" );
	});
	
	
	$.ajax({
             url:'data/maps_data.json',
             dataType:'jsonp',
             data:{userName:'Sergey',password:'qwerty'},
             success:function(res) {
             alert(res);
          }
            })
});


//function initialize() {
	//var LocationData = [
	//	[49.2812668, -123.1035942, "26 East Hastings Street, Vancouver, BC V6A 1M9, Canada" ], 
	//	[49.2814064, -123.1025187, "71 East Hastings Street, Vancouver, BC V6A 1M9, Canada" ], 
	//	[49.2812336, -123.1020622, "122 East Hastings Street, Vancouver, BC V6A 4J1, Canada" ], 
	//	[49.2813564, -123.1012253, "138 East Hastings Street, Vancouver, BC V6A 4J1, Canada" ], 
	//	[49.2811625, -123.0985032, "242 East Hastings Street, Vancouver, BC V6A 1P1, Canada" ], 
	//	[49.2814219, -123.0968273, "329 East Hastings Street, Vancouver, BC V6A 1P7, Canada" ], 
	//	[49.281276, -123.0957023, "381 East Hastings Street, Vancouver, BC V6A 1P7, Canada" ], 
	//	[49.2811153, -123.0957192, "392 East Hastings Street, Vancouver, BC V6A 1P4, Canada" ], 
	//	[49.2810952, -123.094915, "418 East Hastings Street, Vancouver, BC V6A 1P5, Canada" ], 
	//	[49.2812447, -123.0935143, "475 East Hastings Street, Vancouver, BC V6A 1P7, Canada" ], 
	//	[49.2810584, -123.0923323, "550 East Hastings Street, Vancouver, BC V6A 1P8, Canada" ], 
	//	[49.2812044, -123.0911435, "615 East Hastings Street, Vancouver, BC V6A 4J9, Canada" ], 
	//	[49.2811891, -123.0904141, "647 East Hastings Street, Vancouver, BC V6A 4J9, Canada" ], 
	//	[49.2811576, -123.0887649, "715 East Hastings Street, Vancouver, BC V6A 1R8, Canada" ]
	//];
	//var temp_JSON = JSON.stringify(LocationData);
	//document.write(temp_JSON);
	
//	
//	var map = new google.maps.Map(document.getElementById('map-canvas')),
//		bounds = new google.maps.LatLngBounds(),
//		infowindow = new google.maps.InfoWindow();
//
//	if (LocationData.length === 1) {
//		var myLatlng = new google.maps.LatLng(LocationData[0][0], LocationData[0][1]),
//			mapOptions = {
//				zoom: 16,
//				center: myLatlng
//			},
//			mapSingle = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
//		
//		// To add the marker to the map, use the 'map' property
//		var markerSingle = new google.maps.Marker({
//			position: myLatlng,
//			map: mapSingle,
//			title: LocationData[0][2]
//		});
//		
//		google.maps.event.addListener(markerSingle, 'click', function () {
//				infowindow.setContent(this.title);
//				infowindow.open(mapSingle, this);
//			});
//	}
//	else {
//		for (var i = 0; i < LocationData.length; i += 1) {
//			var latlng = new google.maps.LatLng(LocationData[i][0], LocationData[i][1]),
//				marker = new google.maps.Marker({
//					position: latlng,
//					map: map,
//					title: LocationData[i][2]
//				});
//			
//			bounds.extend(latlng);
//			
//			google.maps.event.addListener(marker, 'click', function () {
//				infowindow.setContent(this.title);
//				infowindow.open(map, this);
//			});
//		}
//		 
//		map.fitBounds(bounds);
//	}
//	
//}
//window.onload = initialize;