var slider = tns({
    container: '.slider-home',
    // center: true,
    items: 1,
    slideBy: 'page',
    // autoWidth: true,
    autoplay: true,
    controls: false,
    autoplayButton: false,
    autoplayTimeout: 8000,
    responsive: {
        640: {
            items: 1
        },
        900: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});