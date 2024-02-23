
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
    
        
            
    
        
        
    