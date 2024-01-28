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

  $(document).ready(function() {
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



});


