(function ($) {
    "use strict";

    // ==============================
    // Spinner
    // ==============================
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show').fadeOut(500);
            }
        }, 500);
    };
    spinner();


    // ==============================
    // WOW.js Animation Initialization
    // ==============================
    new WOW().init();

    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        window.addEventListener('load', () => {
            setTimeout(() => { window.scrollTo(0, 1); }, 500);
        });
    }


    // ==============================
    // Sticky Navbar
    // ==============================
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // ==============================
    // Back to Top Button
    // ==============================
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        if (typeof $.easing['easeInOutExpo'] === 'function') {
            $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        } else {
            $('html, body').animate({ scrollTop: 0 }, 600);
        }
        return false;
    });


    // ==============================
    // Facts Counter
    // ==============================
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // ==============================
    // Portfolio Isotope Filter
    // ==============================
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');
        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

    portfolioIsotope.on('arrangeComplete', function () {
        window.dispatchEvent(new Event('resize'));
    });


    // ==============================
    // Testimonials Carousel
    // ==============================
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // ==============================
    // Gmail Free Quote Button
    // ==============================
    $('#gmailQuoteBtn').on('click', function (e) {
        e.preventDefault();

        const name = $('#name').val() || '';
        const email = $('#email').val() || '';
        const mobile = $('#mobile').val() || '';
        const service = $('#service').val() || '';
        const message = $('#message').val() || '';

        const body =
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Mobile: ${mobile}\n` +
            `Service: ${service}\n\n` +
            `Message:\n${message}`;

        const gmailUrl =
            'https://mail.google.com/mail/?view=cm&fs=1' +
            '&to=greenedgepropertymaintenance@gmail.com' +
            '&su=Free Quote Request' +
            '&body=' + encodeURIComponent(body);

        window.open(gmailUrl, '_blank');
    });


    // ==============================
    // Optional: Performance Enhancement
    // ==============================
    $('html').css({
        'scroll-behavior': 'smooth',
        '-webkit-overflow-scrolling': 'touch'
    });

})(jQuery);
