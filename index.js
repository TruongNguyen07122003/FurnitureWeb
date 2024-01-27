$(document).ready(function() {
    // Thêm hover effect cho các phần tử .item
    $(".item").hover(function() {
        $(this).css("transform", "scale(1.2)");
    }, function() {
        $(this).css("transform", "scale(1)");
    });

    // Khởi tạo Slick carousel
    $(".single-carousel").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class=" fa fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
    });
});
