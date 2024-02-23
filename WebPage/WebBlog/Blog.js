
document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.content');
    const prevButton = document.querySelector('.prev-page');
    const nextButton = document.querySelector('.next-page');
    const pageInfo = document.querySelector('.page-info');

    let currentPage = 1;
    const boxesPerPage = 6;
    const totalBoxes = 80;

    function displayBoxes(page) {
        content.innerHTML = '';
        const startIndex = (page - 1) * boxesPerPage;
        const endIndex = Math.min(startIndex + boxesPerPage, totalBoxes);

        for (let i = startIndex; i < endIndex; i++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.innerHTML = `
                <img class="project-img" src="/assets/img/a${i + 1}.jpg" alt="">
                <div class="project-title">Top 10 Modern Luxury Living Room</div>
                <div class="project-info">
                    <p>In today's world, lifestyles are evolving more than ever, with increasing numbers of families opting for modern ways of living.</p>
                </div>
                <div class="project-price">
                    <p>Estimate: </p>
                    <p>3 millions</p>
                </div>
                <a href="#">See more</a>
            `;
            content.appendChild(box);
        }

        pageInfo.textContent = `Page ${page}`;
        updatePaginationButtons();
    }

    function updatePaginationButtons() {
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === Math.ceil(totalBoxes / boxesPerPage);
    }

    displayBoxes(currentPage);

    prevButton.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            displayBoxes(currentPage);
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentPage < Math.ceil(totalBoxes / boxesPerPage)) {
            currentPage++;
            displayBoxes(currentPage);
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var quoteButton = document.getElementById("quoteButton");
    var loginCard = document.getElementById("loginCard");
    var closeBtn = document.getElementById("close");
    var overlay = document.getElementById("overlay");
    var body = document.getElementsByClassName("main")[0]; 

    // Bắt sự kiện click vào nút "Quote"
    quoteButton.addEventListener("click", function() {
        // Hiển thị form login
        loginCard.style.display = "block";
        overlay.style.zIndex = "100";
        overlay.style.display = "block";
        overlay.style.backgroundColor="#DFE9F4";
        overlay.style.opacity="0.5";
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

        

    
    
