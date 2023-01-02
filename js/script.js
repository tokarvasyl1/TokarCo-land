$(function (){
    $('.burger__menu').click(function () {
        $('.menu__body,.burger__menu').toggleClass('opened')
        $('body').addClass('lock')
    });
});




window.addEventListener('load', windowLoad);

function windowLoad() {
    document.addEventListener('click', documentActions);
}

function documentActions(e) {
    const targetElement = e.target;

    //scroll to


    if (targetElement.hasAttribute('data-goto')) {
        const gotoElement = document.querySelector(`${targetElement.dataset.goto}`);
        const headerHeight = document.querySelector(`.header`).offsetHeight;

        if (gotoElement) {
            window.scrollTo({
                top: gotoElement.offsetTop - headerHeight,
                behavior: "smooth"
            });
        }
        e.preventDefault();
    }

    //works filter

    if (targetElement.classList.contains('item-type') && !targetElement.classList.contains('active')) {
        const activeElement = document.querySelector(`.item-type.active`);
        const elements = document.querySelectorAll(`.project_filter_item`);
        const elementType = targetElement.dataset.workType;

        activeElement.classList.remove('active');
        targetElement.classList.add('active');

        elements.forEach(element => {
            !elementType || element.dataset.workType === elementType ?
                element.hidden = false : element.hidden = true;
        })
    }

}

$('.owl-carousel').owlCarousel({
    nav: true,
    items: 1,
    margin: 10,
    dots: false,
    responsiveClass: true,

})

$(function () {
    $('.o1').click(function () {
        $('.popup__bg-o1').addClass('opened')
        $('body').addClass('lock')
    });
    $('.close__popup').click(function () {
        $('.popup__bg-o1').removeClass('opened')
        $('body').removeClass('lock')
    });
});

$(function () {
    $('.o3').click(function () {
        $('.popup__bg-o3').addClass('opened')
        $('body').addClass('lock')
    });
    $('.close__popup').click(function () {
        $('.popup__bg-o3').removeClass('opened')
        $('body').removeClass('lock')
    });
});

$(function () {
    $('.o5').click(function () {
        $('.popup__bg-o5').addClass('opened')
        $('body').addClass('lock')
    });
    $('.close__popup').click(function () {
        $('.popup__bg-o5').removeClass('opened')
        $('body').removeClass('lock')
    });
});

$(function () {
    $('.o6').click(function () {
        $('.popup__bg-o6').addClass('opened')
        $('body').addClass('lock')
    });
    $('.close__popup').click(function () {
        $('.popup__bg-o6').removeClass('opened')
        $('body').removeClass('lock')
    });
});

$(function () {
    $('.o7').click(function () {
        $('.popup__bg-o7').addClass('opened')
        $('body').addClass('lock')
    });
    $('.close__popup').click(function () {
        $('.popup__bg-o7').removeClass('opened')
        $('body').removeClass('lock')
    });
});

$(function () {
    $('.o8').click(function () {
        $('.popup__bg-o8').addClass('opened')
        $('body').addClass('lock')
    });
    $('.close__popup').click(function () {
        $('.popup__bg-o8').removeClass('opened')
        $('body').removeClass('lock')
    });
});

$(function () {
    $('.o9').click(function () {
        $('.popup__bg-o9').addClass('opened')
        $('body').addClass('lock')
    });
    $('.close__popup').click(function () {
        $('.popup__bg-o9').removeClass('opened')
        $('body').removeClass('lock')
    });
});

$(function () {
    $('.o10').click(function () {
        $('.popup__bg-o10').addClass('opened')
        $('body').addClass('lock')
    });
    $('.close__popup').click(function () {
        $('.popup__bg-o10').removeClass('opened')
        $('body').removeClass('lock')
    });
});

// if (window.matchMedia("(max-width: 768px)").matches) {
//     $(function () {
//         $('.menu__link').click(function () {
//             $('.menu__body, .burger__menu').removeClass('opened')
//             $('body').removeClass('lock')
//         });
//     });
//
// }

