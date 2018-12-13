// Animação do menu fixo

$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 500) {
            $('.header').addClass('header-escuro');
        } else {
            $('.header').removeClass('header-escuro');
        }
    });
});

$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $('.h-interno').addClass('header-escuro');
        } else {
            $('.hinterno').removeClass('header-escuro');
        }
    }); 
}); 

//Scroll suave 

$('.introducao a').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href');
    targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);

});

// Animação inicial

Visibility.onVisible(function() {
    setTimeout(function() {
        $(".introducao h1").addClass("animated fadeInDown");
    }, 400);
    setTimeout(function() {
        $(".introducao button").addClass("animated fadeInDown");
    }, 800);


    setTimeout(function() {
        $(".introducao-interna h1").addClass("animated fadeInDown");
    }, 400);
    setTimeout(function() {
        $(".introducao-interna p").addClass("animated fadeInDown");
    }, 800);
    setTimeout(function() {
        $(".animar").addClass("animated fadeInDown");
    }, 1200);
});

// galeria

document.getElementById('links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = { index: link, event: event },
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};

