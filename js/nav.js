var nav = document.querySelector(".container-fluid");
// nav.classList.toggle("sticky", window.scrollY > 10);
var mb = document.querySelector(".entire-body");
window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        nav.classList.add("sticky");
        mb.classList.add("mb-shadow");
    } else {
        nav.classList.remove("sticky");
        mb.classList.remove("mb-shadow");
    }
});