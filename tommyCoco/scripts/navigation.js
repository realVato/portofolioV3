//////////////////
// Responsive NAV //
//////////////////

const navBtn = document.getElementById("nav-toggle-button");

const toggleNavDisplay = e => {
    // Prevent hyperlink
    e.preventDefault();

    // Get NAV
    const responsiveNav = document.getElementById("responsive-nav");

    // Toggle responsive NAV on fa-bars click
    responsiveNav.classList.toggle("openup");
}

navBtn.addEventListener("click", toggleNavDisplay);