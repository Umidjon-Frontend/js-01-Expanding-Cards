const cardItems = document.querySelectorAll(".card-item");

cardItems.forEach((card) => {
    card.addEventListener("click", () => {
        removeActive();
        card.classList.add("active");
    });
});

function removeActive() {
    cardItems.forEach((card) => {
        card.classList.remove("active");
    });
}
