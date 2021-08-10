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
        })
        .then(() => {
            document.querySelector('.popup_send_moderation').style.top= "0px"; // выводим сообщение о успешной отправке
            document.body.style.overflow = "hidden";
        })
        .fail(() => document.querySelector('.popup_send_moderation.popup_try_again').style.top= "0px")// сообщение об ошибке при ошибке
        .done(() => { //после отправки формы
            $(".send_comment textarea").value = '';
            }) ;
    });
});
