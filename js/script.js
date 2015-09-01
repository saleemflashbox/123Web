/**
 * Created by MohammedSaleem on 29/08/15.
 */

$(document).ready(function () {

    var fun={
        lawyerMap: function(){
            var markerPoints=[
                new google.maps.LatLng(37.442231, -122.152674),
                new google.maps.LatLng(37.450415, -122.136132),
                new google.maps.LatLng(37.437205, -122.135652),
                new google.maps.LatLng(37.438043, -122.117144),
                new google.maps.LatLng(37.431799, -122.162503),
                new google.maps.LatLng(37.448398, -122.110863)
            ];
            var iteration=0;
            var markers=[];

            function init(){
                var mapOptions={
                    center:{lat: 37.442078,lng:-122.143084},
                    scrollwheel: false,
                    zoom: 14
                };
                var map10=new google.maps.Map(document.getElementById('lawyersMap'),mapOptions);


                function addMarkers(){
                   var marker= new google.maps.Marker({
                        position: markerPoints[iteration],
                        map:map10,
                        icon: "images/mapMarkerGrey.png",
                        animation:google.maps.Animation.DROP
                   });
                    iteration++;

                    google.maps.event.addListener(marker, 'click', function() {
                        marker.setIcon("images/mapActive.png");
                    });
                }

                function dropMarkers(){
                    for(var i=1;i<=markerPoints.length;i++){
                        setTimeout(function(){
                            addMarkers();
                        },i*300)
                    }
                }

                dropMarkers();

            }
            init();




        }
    };

    function run(){
        fun.lawyerMap();
    }

    run();
});
