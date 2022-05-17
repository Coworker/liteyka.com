//Слайд-шоу на главной странице
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2500); // Change image every 2 seconds
}


//Кнопка галереи внизу на основной странице. Переключение на нужную вкладку в галереи
var tabId = 0;

const tabsBtn_main = document.querySelectorAll(".tabs-nav-button-main");

tabsBtn_main.forEach(onTabclick);

function onTabclick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        tabId = currentBtn.getAttribute("data-tab");
        sessionStorage.setItem("tabId", tabId); //Запись номера вкладки в виртуальное хранилище
    });
}


//кнопка материала. Пересылка на страницу галереи с нужным материалом
const material_btn = document.querySelectorAll(".materials-block-child ");
material_btn.forEach(onTabclick);

function onTabclick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        tabId = currentBtn.getAttribute("data-tab");
        sessionStorage.setItem("tabId", tabId); //Запись номера вкладки в виртуальное хранилище
    });
}