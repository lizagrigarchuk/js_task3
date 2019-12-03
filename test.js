let hav = document.querySelector(".haburder");
let hav1 = document.querySelector(".head");

hav.addEventListener('click', () => {

    if (!hav1.classList.contains('show')) {
        hav1.classList.remove("hidden");
        hav1.classList.add("show");
    }
    else {
        hav1.classList.remove("show");
        hav1.classList.add("hidden");
    }
})