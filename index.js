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

document.addEventListener("DOMContentLoaded", function() {
    // Lấy tham chiếu đến nút "Quote"
    var quoteButton = document.getElementById("quoteButton");
    var overlay = document.getElementById("overlay");
    // Lấy tham chiếu đến thẻ chứa form login
    var loginCard = document.getElementById("loginCard");

    // Bắt sự kiện click vào nút "Quote"
    quoteButton.addEventListener("click", function() {
        // Hiển thị form login
        loginCard.style.display = "block";
        overlay.style.zIndex = "100";
        overlay.style.backgroundColor="#DFE9F4";
        overlay.style.opacity="0.5";
    });
    document.addEventListener("DOMContentLoaded", function() {
        var quoteButton = document.getElementById("quoteButton");
        var loginCard = document.getElementById("loginCard");
    
        quoteButton.addEventListener("click", function() {
            loginCard.style.opacity = "1"; // Hiển thị form login
        });
    });
    

    
    
});
