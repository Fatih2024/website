let url = "https://www.google.com/search?q=";
const searchInput = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
    if (searchInput.value != "") {
        let queryUrl = url + encodeURIComponent(searchInput.value);
        window.open(queryUrl, "_blank");
        searchInput.value= "";
        url="https://www.google.com/search?q=";
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleButton = document.getElementById('darkModeToggle');

    // Butona tıklandığında koyu modu aktif etme/deaktif etme
    toggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});
