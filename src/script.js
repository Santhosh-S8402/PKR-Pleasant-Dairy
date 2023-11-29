if (window, matchMedia("(min-width:1024px)").matches) {
    var carouselWidth = $('.carousel-inner')[0].scrollWidth;
    var cardWidth = $('.carousel-item').width();

    var scrollPosition = 0;
    $('.carousel-control-next').on('click', function () {
        if (scrollPosition < (carouselWidth - (cardWidth * 3))) {
            scrollPosition = scrollPosition + cardWidth;
            $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
        }
    });

    $('.carousel-control-prev').on('click', function () {
        if (scrollPosition > 0) {
            scrollPosition = scrollPosition - cardWidth;
            $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
        }
    });
}
alert("Hi! Welcome to PKR Pleasant Dairy");
function calculate() {
    var cow = parseInt(document.getElementById("cow").value);
    var buffalo = parseInt(document.getElementById("buffalo").value);
    var result = document.getElementById("result");
    var cow_amt = cow * 40;
    var buffalo_amt = buffalo * 55;
    result.innerHTML = "Rate for " + cow + " litre of " + " cow milk     : " + cow_amt +
        "<br>Rate for " + buffalo + " litre of " + " buffalo milk : " + buffalo_amt +
        "<br>Total Rate : " + (cow_amt + buffalo_amt);
}