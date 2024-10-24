document.addEventListener("DOMContentLoaded", () => {
    const memoryItems = document.querySelectorAll(".memories li");
    const memoryImage = document.getElementById("memoryImage");

    memoryItems.forEach(item => {
        item.addEventListener("click", function () {
            const imgSrc = this.getAttribute("data-img");
            memoryImage.src = imgSrc;
            memoryImage.style.opacity = 0;  // Start fade out effect
            setTimeout(() => {
                memoryImage.style.opacity = 1;  // Fade in new image
            }, 100);
        });
    });
});
