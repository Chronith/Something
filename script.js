document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    // Toggle the menu visibility on click
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
// alert("hello ji");