$(document).ready(function() {
    // Khởi tạo Slick carousel
    $(".single-carousel").slick({
        centerMode: true,
        centerPadding: '60px',
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            }
        ]
    });

    // Thêm sự kiện click cho từng phòng
    $(".description-title").click(function(event) {
        event.preventDefault();
        var roomTitle = $(this).text();
        var roomDetails = $(this).siblings(".description-details").text();
        var roomSeeMore = $(this).siblings(".description-detail-more").attr("href");
        var roomImage = $(this).closest(".item").find(".body-picture").attr("src");
        updateNewProjectBox(roomTitle, roomDetails, roomSeeMore, roomImage);
    });

    function updateNewProjectBox(title, details, seeMoreLink, imageSrc) {
        var proImgElement = $(".pro-img").find(".img-tag");
        proImgElement.attr("src", imageSrc);

        var newProjectBox = $(".newProject-box");
        newProjectBox.find(".project-title").text(title);
        newProjectBox.find(".project-description").text(details);
        newProjectBox.find(".See-more-details").attr("href", seeMoreLink);
    }
});

// Using plain JavaScript for other functionalities
document.addEventListener("DOMContentLoaded", function() {
    var quoteButton = document.getElementById("quoteButton");
    var loginCard = document.getElementById("loginCard");
    var closeBtn = document.getElementById("close");
    var overlay = document.getElementById("overlay");
    var body = document.querySelector(".main"); // Use querySelector for single element retrieval

    // Bắt sự kiện click vào nút "Quote"
    quoteButton.addEventListener("click", function() {
        // Hiển thị form login
        loginCard.style.display = "block";
        overlay.style.zIndex = "100";
        overlay.style.backgroundColor = "#DFE9F4";
        overlay.style.opacity = "0.8";
        body.style.pointerEvents = "none";
    });

    // Bắt sự kiện click vào nút "Close"
    closeBtn.addEventListener("click", function() {
        // Ẩn form login
        loginCard.style.display = "none";
        // Đặt lại giá trị của lớp phủ
        overlay.style.zIndex = "-1";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
        overlay.style.opacity = "0";
        // Khôi phục các thuộc tính của phần tử .main
        body.style.pointerEvents = "auto";
    });
});
