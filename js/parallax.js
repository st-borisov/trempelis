$(function () {
    let w = $(window);

    parallax(w.scrollTop());

    w.on('scroll', function() {
        let top = $(this).scrollTop();
        parallax(top);
    });
});

function parallax(top) {
    $('.hero-block__img').css(
        'transform', 'translateY(' + (top / -4) + 'px)'
    );

    if (top <= 100000) {
        $('.advantage__block-img-a').css(
            'transform', 'translateY(' + (top / -2) + 'px)'
        );
    }

    if (top <= 10000000) {
        $('.advantage__block-img-b').css(
            'transform', 'translateY(' + (top / -4) + 'px)'
        );
    }

    if (top <= 10000) {
        $('.for-whom-block__img-a').css(
            'transform', 'translateY(' + (top / -2) + 'px)'
        );
        }
    if (top <= 1000000) {
        $('.differ-block__img-a').css(
            'transform', 'translateY(' + (top / -2) + 'px)'
        );
        }
    if (top <= 1000000) {
        $('.differ-block__img-b').css(
            'transform', 'translateY(' + (top / -4) + 'px)'
        );
        }
    if (top <= 1000000) {
        $('.catalog-block__img-b').css(
            'transform', 'translateY(' + (top / -3) + 'px)'
        );
        }
    if (top <= 1000000) {
        $('.catalog-block__img-c').css(
            'transform', 'translateY(' + (top / -4) + 'px)'
        );
        }
    if (top <= 1000000) {
        $('.catalog-block__img-d').css(
            'transform', 'translateY(' + (top / -2) + 'px)'
        );
        }
    if (top <= 1000000) {
        $('.confidence-img-a').css(
            'transform', 'translateY(' + (top / -4) + 'px)'
        );
        }
    if (top <= 1000000) {
        $('.founder-block__img-a').css(
            'transform', 'translateY(' + (top / -4) + 'px)'
        );
        }
    if (top <= 1000000) {
        $('.founder-block__img-b').css(
            'transform', 'translateY(' + (top / -4) + 'px)'
        );
        }
    if (top <= 1000000) {
        $('.say__img-a').css(
            'transform', 'translateY(' + (top / -5) + 'px)'
        );
        }
    }
