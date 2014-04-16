$(document).ready(function() {

    $("input, textarea, select").not('.nostyle').uniform();
    $("#loginForm").validate({
        rules: {
            username: {
                required: true,
                minlength: 4
            },
            password: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            username: {
                required: "Kullanıcı Adı Giriniz",
                minlength: "! Kullanıcı Adınız 4 karakterden büyük olmalı"
            },
            password: {
                required: "Şifrenizi Giriniz",
                minlength: "! Şifreniz 6 karakterden büyük olmalı"
            }
        },
        submitHandler: function(form) {
            //alert('ıj');

            $('#lbt').hide();
            $('#lht').show();
            $("#msgbox").removeClass().addClass('alert alert-info').text('Giriş Bilgileriniz Kontrol ediliyor....').fadeIn(1000);

            $.post("arete.php", {username: $('#username').val(), password: $('#password').val(), prog: $('#prog').val(), rand: Math.random()}, function(data)
            {
                if (data == 'yes')
                {
                    $("#msgbox").fadeTo(200, 0.1, function()  //start fading the messagebox
                    {
                        $(this).removeClass().html('Sisteme Giriş İşlemi Başarılı..').addClass('alert alert-success').fadeTo(900, 1,
                                function()
                                {
                                    document.location = './home';
                                });
                    });
                }
                else
                {
                    $("#msgbox").fadeTo(200, 0.1, function() //start fading the messagebox
                    {
                        $(this).removeClass().html('Kullanıcı Bilgilerinizi Kontrol Ediniz...').addClass('alert alert-error').fadeTo(900, 1,
                                function()
                                {
                                    document.location = './';
                                }
                        );
                    });
                }

            });



        }
    });

});
