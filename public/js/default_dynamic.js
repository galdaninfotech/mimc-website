
        function ajaxSubmitCommentForm(){
        "use strict";

        var options = {
        success: function(){
        $j("#commentform textarea").val("");
        $j("#commentform .success p").text("Comment has been sent!");
        }
        };

        $j('#commentform').submit(function() {
        $j(this).find('input[type="submit"]').next('.success').remove();
        $j(this).find('input[type="submit"]').after('<div class="success"><p></p></div>');
        $j(this).ajaxSubmit(options);
        return false;
        });
        }
        var header_height = 60;
        var min_header_height = 40;
                

        
            var geocoder;
            var map;

            function initialize() {
            "use strict";
            // Create an array of styles.
                        var mapStyles = [
            {
            stylers: [
            {hue: "#324156" },
            {saturation: -60},
            {lightness: -20},
            {gamma: 1.51}
            ]
            }
            ];
            var qodeMapType = new google.maps.StyledMapType(mapStyles,
            {name: "Qode Map"});

            geocoder = new google.maps.Geocoder();
            var latlng = new google.maps.LatLng(-34.397, 150.644);
            var myOptions = {
                        zoom: 12,
                            scrollwheel: false,
                        center: latlng,
            zoomControl: true,
            zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.RIGHT_CENTER
            },
            scaleControl: false,
            scaleControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
            },
            streetViewControl: false,
            streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
            },
            panControl: false,
            panControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
            },
            mapTypeControl: false,
            mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'qode_style'],
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.LEFT_CENTER
            },
                                        mapTypeId: google.maps.MapTypeId.ROADMAP
                        };
            map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
                        }

            function codeAddress(data) {
            "use strict";

            if (data === '')
            return;

            var contentString = '<div id="content">'+
                '<div id="siteNotice">'+
                    '</div>'+
                '<div id="bodyContent">'+
                    '<p>'+data+'</p>'+
                    '</div>'+
                '</div>';
            var infowindow = new google.maps.InfoWindow({
            content: contentString
            });
            geocoder.geocode( { 'address': data}, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
                            icon:  'http://demo.qodeinteractive.com/subway/wp-content/themes/subway/img/pin.png',
                        title: data['store_title']
            });
            google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
            });
            //infowindow.open(map,marker);
            }
            });
            }

            var $j = jQuery.noConflict();

            $j(document).ready(function() {
            "use strict";

            showContactMap();
            });
            
        function showContactMap() {
        "use strict";

        if($j("#map_canvas").length > 0 && typeof google === 'object'){
        initialize();
        codeAddress('');
        codeAddress('');
        codeAddress('New York, 5th Ave');
        codeAddress('New York, W 72th');
        codeAddress('New York, E 79th');
        }
        }

        var no_ajax_pages = [];
        var root = 'https://demo.qodeinteractive.com/subway/';
        var theme_root = 'https://demo.qodeinteractive.com/subway/wp-content/themes/subway/';
                    var parallax_speed = 0.7;
        
                        no_ajax_pages.push('https://demo.qodeinteractive.com/subway/product/woven-tracksuit-top/');
                                no_ajax_pages.push('https://demo.qodeinteractive.com/subway/product/fairisle-bobble-hat/');
                                no_ajax_pages.push('https://demo.qodeinteractive.com/subway/product/branded-cargo-shorts/');
                                no_ajax_pages.push('https://demo.qodeinteractive.com/subway/product/running-trainers/');
                                no_ajax_pages.push('https://demo.qodeinteractive.com/subway/product/water-bottle-belts-for-running/');
                                no_ajax_pages.push('https://demo.qodeinteractive.com/subway/product/spyder-ski-jackets/');
                                no_ajax_pages.push('https://demo.qodeinteractive.com/subway/product/training-length-tights/');
                                no_ajax_pages.push('https://demo.qodeinteractive.com/subway/product/wind-breaker-jacket/');
                                no_ajax_pages.push('https://demo.qodeinteractive.com/subway/product/heavy-duty-hiking-boots/');
                                no_ajax_pages.push('https://demo.qodeinteractive.com/subway/product/ski-jacket/');
                                no_ajax_pages.push('https://demo.qodeinteractive.com/subway/product/ski-sunglasses/');
                                no_ajax_pages.push('https://demo.qodeinteractive.com/subway/product/tshirt-mens/');
                                no_ajax_pages.push('https://demo.qodeinteractive.com/subway/product/nylon-rain-jacket/');
                                no_ajax_pages.push('https://demo.qodeinteractive.com/subway/product/medium-training-bag/');
                                no_ajax_pages.push('https://demo.qodeinteractive.com/subway/product/half-zip-long-sleeve-shirt/');
                                no_ajax_pages.push('https://demo.qodeinteractive.com/subway/product/running-shoes/');
                                no_ajax_pages.push('https://demo.qodeinteractive.com/subway/product/thermal-inner-gloves/');
                            no_ajax_pages.push('https://demo.qodeinteractive.com/subway/shop/');
            no_ajax_pages.push('https://demo.qodeinteractive.com/subway/cart/');
            no_ajax_pages.push('https://demo.qodeinteractive.com/subway/checkout/');
            no_ajax_pages.push('https://demo.qodeinteractive.com/subway/?page_id=1141');
            no_ajax_pages.push('https://demo.qodeinteractive.com/subway/?page_id=1143');
            no_ajax_pages.push('https://demo.qodeinteractive.com/subway/my-account/');
            no_ajax_pages.push('https://demo.qodeinteractive.com/subway/?page_id=1133');
            no_ajax_pages.push('https://demo.qodeinteractive.com/subway/?page_id=1137');
            no_ajax_pages.push('');
            
                        no_ajax_pages.push('https://demo.qodeinteractive.com/subway/?animation=off');
                                no_ajax_pages.push('https://demo.qodeinteractive.com/subway/?animation=fade');
                                no_ajax_pages.push('https://demo.qodeinteractive.com/subway/?animation=updown_fade');
                                no_ajax_pages.push('https://demo.qodeinteractive.com/subway/?animation=leftright');
                                no_ajax_pages.push('http://demo.qodeinteractive.com/subway/?animation=updown');
                
        