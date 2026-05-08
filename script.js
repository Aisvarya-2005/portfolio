console.log("Portfolio Loaded Successfully");

// Active Navbar Link

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(nav => {
            nav.classList.remove("active");
        });

        link.classList.add("active");

    });

});

// Scroll Animation

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    header.classList.toggle("sticky", window.scrollY > 50);

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// Reveal Animation

const revealElements = document.querySelectorAll(
    ".project-card, .skill-card-modern, .experience-card, .certificate-card"
);

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

revealOnScroll();