
        function loadApp() {

            // Create the flipbook

            $('.flipbook').turn({
                // Aceleración
                acceleration: true,

                // Auto center this flipbook
                autoCenter: true,

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
            });
        }
        // Load the HTML4 version if there's not CSS transform

        yepnope({
            test: Modernizr.csstransforms,
            complete: loadApp
        });
