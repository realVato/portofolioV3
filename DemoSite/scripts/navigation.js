//////////////////
// Responsive NAV //
//////////////////

var navBtn = document.getElementById("nav-toggle-button");

function toggleNavDisplay(e) {
    // Prevent hyperlink
    e.preventDefault();

    // Get NAV
    var responsiveNav = document.getElementById("responsive-nav");

    // Toggle responsive NAV on fa-bars click
    responsiveNav.classList.toggle("openup");
}

navBtn.addEventListener("click", toggleNavDisplay);