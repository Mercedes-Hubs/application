// Height de la carte
$('[id=map-container]').css('height', $(window).height());
$('[id=map]').css('height', $(window).height());

watchPosition.init();

// On lance l'ecoute sur la position de l'utilisateur
watchPosition.launch();

setTimeout(function () {
    // Adaptation des éléments à l'écran
    $('[id=loader]').removeClass('active');
}, 5000);


// Quand l'utilisateur appel l'helicoptere
$('#call-helicopter').on('click', function ()
{
    if ($('#call').length === 0) {
        Segue.add({
            id: 'call',
            segue: 'right',
            statusBar: false,
            template: {
                url: 'templates/segues/call.html'
            }
        });
    }

    setTimeout(function() {
        Segue.display('call');
    }, 200);
});