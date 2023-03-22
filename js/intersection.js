const blocks = document.querySelectorAll(".item");

const observer = new IntersectionObserver(e => {
    e.forEach(  entry => {
        entry.target.classList.toggle("display", entry.isIntersecting);
    });
})


blocks.forEach(block => {
    observer.observe(block);
})