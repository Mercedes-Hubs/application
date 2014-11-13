// When the phone is ready to go
document.addEventListener('deviceready', function() {

    // Suppression du delais de click
    FastClick.attach(document.body);

    // Verification de l'etat de la status bar
    setInterval(function() {
        statusBarClass.verify(StatusBar);
    }, 1);

});