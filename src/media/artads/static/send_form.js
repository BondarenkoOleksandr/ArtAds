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
    $('.footer_form, .form-contact, .send_form').on('submit', function (e) {
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
            $(this).find('.status').addClass('visible');
            $(this).find('.status').text('Заявка успешно отправлена')
        })
        .fail(() => {
            $(this).find('.status').addClass('visible');
            $(this).find('.status').text('Ошибка при отправке');
        })
    });
});
