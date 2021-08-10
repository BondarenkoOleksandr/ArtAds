$(document).ready(function () {
    function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
    $(".send_comment").on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            async: true,
            url: $(this).data('url'),
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
                $(".textarea").val('');
            }) ;
    });
    $(".social-item-like").on('click', function (e) {
        var csrftoken = getCookie('csrftoken');
        $.ajax({
            type: 'POST',
            async: true,
            url: $(this).data('url'),
            data: "csrftoken="+csrftoken,
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
                $(".textarea").val('');
            }) ;
    });
});
