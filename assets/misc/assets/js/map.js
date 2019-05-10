
            // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);

            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 6,

                    disableDefaultUI: true,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(50.2716, 30.3125), // ריב"ל 8, תל אביב

                    // How you would like to style the map.
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [
                        {
                            "featureType": "administrative.country",
                            "elementType": "geometry"
                        }
                    ]
                };

                // Get the HTML DOM element that will contain your map
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('contact_map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Создаем маркер на карте
                var marker = new google.maps.Marker({

                    // Определяем позицию маркера
                    position: {lat: 50.2716, lng: 30.3125},

                    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                    map: map,

                    // Пишем название маркера - появится если навести на него курсор и немного подождать
                    title: 'mark',

                    // Укажем свою иконку для маркера
                    icon: 'assets/img/content/location.png'
                });
            }




