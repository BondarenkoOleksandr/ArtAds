$(document).ready(function () {
    $(".send_comment").on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            async: true,
            url: $(this).attr('action'),
            data: $(this).serialize(),
            success: function(data) {
            const isEmpty = x => !Object.keys(x).length;
            var len = Object.keys(data).length
            if( !isEmpty(data) ){
                console.log(data);
            }
            },
            dataType: 'json',
        });
    });
});
