
// Get the hamburger button and navigation list.
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open or close the mobile navigation when the button is clicked.
menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    // Update the accessibility state of the button.
    menuToggle.setAttribute("aria-expanded", isOpen);

    // Change the icon depending on whether the menu is open.
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after a navigation link is selected.
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");

        // Reset the button to its closed state.
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});
