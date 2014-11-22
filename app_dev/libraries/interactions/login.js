
// Click sur le login sur la page d'accueil
$('#display-login').on('click', function (event) {

    if ($('#login').length === 0) {
        // On ajoute la segue LOGIN
        Segue.add({
            id: 'login',
            segue: 'right',
            statusBar: false,
            template: {
                url: 'templates/segues/login.html'
            }
        });

        setTimeout(function() {
            Segue.display('login');
        }, 200);
    } else {
        Segue.display('login');
    }
});

// Click sur le login sur la page login
$('#segues').on('submit', '#login-form', function (event) {
    event.preventDefault();

    // On ajoute la segue MAP
    Segue.add({
        id: 'map',
        segue: 'right',
        statusBar: false,
        template: {
            url: 'templates/segues/map.html'
        }
    });

    setTimeout(function() {
        Segue.display('map');
    }, 200);
});


// ---------------------
// ---------------------
// ---------------------


// Click sur le register sur la page d'accueil
$('#display-signup').on('click', function (event) {

    if ($('#signup1').length === 0) {
        // On ajoute la segue LOGIN
        Segue.add({
            id: 'signup1',
            segue: 'right',
            statusBar: false,
            template: {
                url: 'templates/segues/signup.html'
            }
        });

        setTimeout(function() {
            Segue.display('signup1');
        }, 200);
    } else {
        Segue.display('signup1');
    }
});

// Click sur l'etape 2 sur le register
$('#segues').on('click', '#signup-step2', function (event) {
    event.preventDefault();

    if ($('#signup2').length === 0) {
        // On ajoute la segue LOGIN
        Segue.add({
            id: 'signup2',
            segue: 'right',
            statusBar: false,
            template: {
                url: 'templates/segues/signup2.html'
            }
        });

        setTimeout(function() {
            Segue.display('signup2');
        }, 200);
    } else {
        Segue.display('signup2');
    }
});


// ---------------------
// ---------------------
// ---------------------


// On verifie la carte de credit pour afficher l'icone
$('#segues').on('keyup', '#card', function() {
    var card = $(this).val();

    if (card.length > 4) {
        $('#card-icon').attr('src', 'resources/images/icons/visa.png');
    } else {
        $('#card-icon').attr('src', 'resources/images/icons/mastercard.png');
    }
});