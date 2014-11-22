// Quand on clique sur un ouvreur de navigation
$('#segues').on('click', '[data-action=openNavigation]', function()
{
    $('[id=navigation]').addClass('active');
});

// Quand on clique sur un fermer de navigation
$('body').on('click', '[data-action=closeNavigation]', function ()
{
    $('[id=navigation]').removeClass('active');
});


// ---------------------
// ---------------------
// ---------------------

// Quand on clique sur deconnexion
$('#nav-logout').on('click', function () {
    Segue.display('home');

    // On reset les pages
    Segue.delete('login');
    Segue.delete('signup1');
    Segue.delete('signup2');
    Segue.delete('map');
    Segue.delete('call');

    // On supprime le menu
    $('[id=navigation]').removeClass('active');
});