document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const currentlyActiveHeader = document.querySelector(".accordion-header.active");
            
            if (currentlyActiveHeader && currentlyActiveHeader !== this) {
                currentlyActiveHeader.classList.remove("active");
                currentlyActiveHeader.setAttribute("aria-expanded", "false");
                currentlyActiveHeader.nextElementSibling.style.maxHeight = null;
                currentlyActiveHeader.nextElementSibling.style.padding = "0 1.5rem"; 
            }

            this.classList.toggle("active");
            const content = this.nextElementSibling;
            const isExpanded = this.classList.contains("active");
            this.setAttribute("aria-expanded", isExpanded);

            if (isExpanded) {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "1.5rem";
            } else {
                content.style.maxHeight = null;
                content.style.padding = "0 1.5rem";
            }
        });
    });
});

