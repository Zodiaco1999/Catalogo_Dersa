
        function loadApp() {

            // Create the flipbook
            $('.flipbook').turn({
                // Aceleración
                acceleration: true,

                // Auto center this flipbook
                //autoCenter: true,

                // display: 'single',

                // Duración
                duration: 500,

                // Width
                width: 1222,

               // Height
                height: 900,

                /*when: {
                    turned: function (event, page, pageObj) {
                        alert($('.flipbook').turn('size'));
                    }
                },*/

                // Enable gradients
                gradients: true
            }).bind('start',
                function(event, pageObject, corner){
                if (pageObject.page==4) {
                alert($('.flipbook').turn('range', 5));
                }
            });
        }
        // Load the HTML4 version if there's not CSS transform

        yepnope({
            test: Modernizr.csstransforms,
            both: ['css/styles.css'],
            yep: ['lib/turn.js', 'css/flipbook-html5.css'],
            nope : ['lib/turn.html4.js', 'css/flipbook-html4.css'],
            complete: loadApp
        });
