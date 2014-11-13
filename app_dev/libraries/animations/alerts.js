/**
 * data-action="alert" 
 * data-title="Bravo"
 * data-message="Merci de votre aide"
 * data-type="success"
 * data-icon="ion-ios7-checkmark
 */
$('[id=segues]').on('click', '[data-action=alert]', function ()
{
    var type = $(this).attr('data-type');
    var title = $(this).attr('data-title');
    var message = $(this).attr('data-message');
    var icon = $(this).attr('data-icon');
    
    if (icon == 'undefined') {
        icon = 'ion-ios7-information';
    }

    $.get('partials/alerts/default.html', function (tpl) 
    {
        tpl = Handlebars.compile(tpl);
        var html = tpl({
            title: title,
            type: type,
            message: message,
            icon: icon
        });

        $('#alerts').html(html);

        $('[id=segues] .segue-active').addClass('segue-blur');
        $('[id=alerts]').addClass('alerts-active');
        $('[id=alert-current]').addClass('alert-active bounceIn');

        setTimeout(function () {
            $('[id=alert-current]').removeClass('bounceIn').addClass('bounceOut');
            
            setTimeout(function () {
                $('[id=segues] .segue-active').removeClass('segue-blur');
                $('[id=alert-current]').removeClass('alert-active').removeClass('bounceOut');
                $('[id=alerts]').removeClass('alerts-active').html('');
            }, 1000);
        }, 3000);
    });
});