$(function() {
    $('#contact input[type=submit]').click(sendForm);

    $('.fa').on('click', function() { window.scrollTo(0, 0) });
});

function sendForm(ev) {
    const form = document.getElementsByTagName('form')[0];
    if (form.checkValidity()) {
        ev.preventDefault();
        $.ajax({
                url: "https://formspree.io/lishchynskiy91@gmail.com",
                method: "POST",
                data: {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    message: $('#message').val()
                },
                dataType: "json"
            })
            .done(() => {
                //             $('#thank-dialog').attr('open', 'open');
                $('#thank-dialog').removeClass('hiddenDialog');
                setTimeout(() => { $('#thank-dialog').attr('class', 'hiddenDialog') }, 3500);
            })
            .fail(() => {
                //            $('#error-dialog').attr('open', 'open'); 
                $('#error-dialog').removeClass('hiddenDialog');
                setTimeout(() => { $('#error-dialog').attr('class', 'hiddenDialog') }, 3500);
            });
    }
}
