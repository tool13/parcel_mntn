document.querySelectorAll(".controls__btn").forEach(control => {
    control.addEventListener("click", (evt) => {
        let currentSection = document.querySelector(`[data-section="${evt.target.dataset.value}"]`);
        currentSection.scrollIntoView({ block: "center", behavior: "smooth" });
    })
})

let sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            let sectionNumber = entry.target.dataset.section;
            document.querySelector(`[data-section="${sectionNumber}"]`).classList.add("active");
            document.querySelector(".controls__btn.active").classList.remove("active");
            document.querySelector(`.controls__btn[data-value="${sectionNumber}"]`).classList.add("active");
        }
    })
}, {threshold: 0.5})

document.querySelectorAll("[data-section]").forEach(section => sectionObserver.observe(section));