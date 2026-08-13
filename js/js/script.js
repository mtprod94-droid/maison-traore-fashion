// ==========================================
// MAISON TRAORÉ FASHION
// Main Website JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    /* ================= MOBILE MENU ================= */

    /* ================= MOBILE MENU ================= */

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        navigation.classList.toggle("menu-open");
        menuButton.classList.toggle("active");

    });

    const navigationLinks = navigation.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("menu-open");
            menuButton.classList.remove("active");

        });

    });
}


    /* ================= SCROLL REVEAL ================= */

    const revealElements = document.querySelectorAll(
        ".intro-content, .section-heading, .collection-card, .atelier-content, .sur-mesure-content, .appointment-inner, .contact"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* ================= HEADER SCROLL ================= */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 80) {

            header.classList.add("header-scrolled");

        } else {

            header.classList.remove("header-scrolled");

        }

    });


    /* ================= CURRENT YEAR ================= */

    const footerYear = document.querySelector(".footer p");

    if (footerYear) {

        footerYear.innerHTML =
            `© ${new Date().getFullYear()} Maison Traoré Fashion. Tous droits réservés.`;

    }

});
