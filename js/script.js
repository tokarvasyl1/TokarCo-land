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

    if (targetElement.classList.contains('item-type') && !targetElement.classList.contains('active')){
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
    nav:true,
    items:1,
    margin:10,
    dots:false,
    responsiveClass:true,

})






