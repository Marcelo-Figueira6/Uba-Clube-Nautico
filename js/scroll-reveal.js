const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150; 

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        } else {

        }
    });
}

window.addEventListener("scroll", revealOnScroll);

document.addEventListener("DOMContentLoaded", revealOnScroll);
