$(function () {
    $('.burger__menu').click(function () {
        $('.menu__body,.burger__menu').toggleClass('opened')
        $('body').toggleClass('lock')
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
    if (targetElement.classList.contains('goods__item__type') && !targetElement.classList.contains('active')){
        const activeElement = document.querySelector(`.goods__item__type.active`);
        const elements = document.querySelectorAll(`.goods__items-item`);
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
    loop:true,
    margin:10,
    boolean:true,
    responsiveClass:true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    smartSpeed:450,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
        }
    }
})




