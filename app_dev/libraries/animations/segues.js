$('#segues').on('click', '[data-segue]', function() 
{
    var segue = $(this).attr('data-segue');
    Segue.display(segue);
});

