var watchPosition = {
    watchId: "",
    map: false,
    marker: false,

    /**
     * Methode d'initialisation de la carte
     */
    init: function ()
    {
        navigator.geolocation.getCurrentPosition(function (position)
            {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                var mapOptions = {
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: 15,
                    disableDefaultUI: true,
                    center: new google.maps.LatLng(latitude, longitude)
                };

                // On creer la map
                this.map = new google.maps.Map(document.getElementById('map-container'), mapOptions);

                // On ajoute le marker de la position de l'utilisateur
                this.marker = new google.maps.Marker({
                    position: new google.maps.LatLng(latitude, longitude),
                    map: this.map,
                    icon: 'resources/images/icons/navigate.png'
                });
            }
        );
    },

    /**
     * Methode executee pour actualiser la position de l'utilisateur
     * sur la map en temps reel
     */
    reloadMarker: function (position)
    {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
    },

    /**
     * Methode exectuee au cas ou la localisation de l'utilisateur
     * ne fonctionne pas
     */
    fail: function (error)
    {
        //alert(error.message);
    },

    /**
     * Lancement de l'ecouteur de position
     */
    launch: function ()
    {
        // On lance l'ecouteur de position
        this.watchId = navigator.geolocation.watchPosition(this.reloadMarker, this.fail);
    },

    /**
     * Stop l'ecouteur de position
     */
    stop: function ()
    {
        navigator.geolocation.clearWatch(this.watchId);
    }
};