const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isExpanded);
        mainNav.classList.toggle("active");
        menuToggle.textContent = mainNav.classList.contains("active") ? "✕" : "☰";
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".main-nav a[href^=\"#\"]");
    const headerHeight = document.getElementById("main-header")?.offsetHeight || 70;
    const sections = document.querySelectorAll("main section[id]");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                if (mainNav.classList.contains("active")) {
                    menuToggle.click();
                }
            }
        });
    });

    const activateNavLinks = () => {
        let currentSectionId = "";
        const scrollPosition = window.pageYOffset + headerHeight + 50;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
        if (window.pageYOffset < sections[0].offsetTop - headerHeight - 50) {
            navLinks.forEach(link => link.classList.remove("active"));
            const inicioLink = document.querySelector('.main-nav a[href="#inicio"]');
            if (inicioLink) inicioLink.classList.add("active");
        }
    };

    window.addEventListener("scroll", activateNavLinks);
    activateNavLinks();
});

