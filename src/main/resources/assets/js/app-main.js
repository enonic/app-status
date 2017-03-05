$(function() {

    var timer;
    var $container = $('#statusContainer');

    $('.action-button').on('click', function() {
        clearInterval(timer);
        var service = $(this).data('status');
        var statusParam = $(this).data('status-param');

        var data = getData(service, statusParam);
        $container.html(data);

        if ( service == 'jvm' || service == 'index' || service == 'cluster' ) {
            timer = setInterval( function() {
                data = getData(service, statusParam);
                $('#statusContainer').html(data);
            }, 3000);
        }

    });

    function getData(service, statusParam) {

        var result;

        $.ajax({
            url: CONFIG.serviceUrl + statusParam,
            dataType: 'html',
            method: 'POST',
            data: {service: service}
        }).done(function(data) {
            $container.html(data);
            result = data;

        }).fail(function() {
            console.log('failed ajax for ' + service);
        }).always(function() {

        });
        return result;
    }
});