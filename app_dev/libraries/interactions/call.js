// Lorsque l'utilisateur souhaite ce geolocaliser pour le depart d'un voyage
$('#call-geolocation').on('click', function ()
{
    navigator.geolocation.getCurrentPosition(function (position)
    {
        // On transforme le point en adresse
        $.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+ position.coords.latitude +','+ position.coords.longitude, function(response)
        {
            var address = response.results[0].formatted_address;
            $('[id=start]').val(address);
        });
    });
});