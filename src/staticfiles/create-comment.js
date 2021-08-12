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
        var csrftoken = getCookie('csrftoken');
        e.preventDefault();
        $.ajax({
            type: 'POST',
            async: true,
            url: $(this).attr('action'),
            data: "csrfmiddlewaretoken="+csrftoken+'&'+$(this).serialize(),
            success: function(data) {
            const isEmpty = x => !Object.keys(x).length;
            var len = Object.keys(data).length
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
    $(".rating span input").on('click', function (e) {
        var csrftoken = getCookie('csrftoken');
        let rating = $(this).val();
        let article_id = $(this).parent().parent('.rating').data('id');
        $.ajax({
            type: 'POST',
            async: true,
            url: $(this).parent().parent('.rating').data('url'),
            data: "csrfmiddlewaretoken="+csrftoken+'&rating='+rating+'&article_id='+article_id,
            success: function(data) {
            const isEmpty = x => !Object.keys(x).length;
            var len = Object.keys(data).length
                if( !isEmpty(data) ){
                    $('.stars-text-current.number').text(data.avarage_rating);
                    $('.stars-text-mark.number').text(data.count);
                }
            },
            dataType: 'json',
        })
        .fail(() => document.querySelector('.popup_send_moderation.popup_try_again').style.top= "0px")// сообщение об ошибке при ошибке
    });
    $(".social-item-like").on('click', function (e) {
        var csrftoken = getCookie('csrftoken');
        $.ajax({
            type: 'POST',
            async: true,
            url: $(this).data('url'),
            data: "csrfmiddlewaretoken="+csrftoken,
            success: function(data) {
            const isEmpty = x => !Object.keys(x).length;
            var len = Object.keys(data).length
                if( !isEmpty(data) ){
                    $('.social-item-like-inner').text(data.number_of_likes);
                }
            },
            dataType: 'json',
        })
        .fail(() => document.querySelector('.popup_send_moderation.popup_try_again').style.top= "0px")// сообщение об ошибке при ошибке
    });
});
