//Переключение кнопок вкладок
const tabsBtn = document.querySelectorAll(".tabs-nav-button");
const tabsBtn_2 = document.querySelectorAll(".tabs-nav-button-2");
const tabsBtn_main = document.querySelectorAll(".tabs-nav-button-main");
const tabsItems = document.querySelectorAll(".tabs-item");
console.log(tabId);

//Считывание номера вкладке при переадресации с главной страницы
var tabId = 0;
tabId = sessionStorage.getItem("tabId");

//Переключение вкладок
tabsBtn.forEach(onTabclick);

function onTabclick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        let currentLink = document.querySelector(tabId + "_link");
        let currentBtn_act = document.querySelector(tabId + "_btn");


        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active') //Погасить активные кнопки сверху
            });

            tabsBtn_2.forEach(function(item) {
                item.classList.remove('active') //Погасить активные кнопки снизу
            });

            tabsItems.forEach(function(item) {
                item.classList.remove('active') //Погасить активные вкладки
            });

            currentBtn.classList.add('active'); //Высветить новую активную кнопку сверху
            currentTab.classList.add('active'); //Высветить новую активную вкладку
            currentLink.classList.add('active'); //Высветить новую активную кнопку снизу
            currentBtn_act.classList.add('active');

        }

    });
}



//Назначение вкладки по умолчанию
if (tabId == undefined) {
    document.querySelector(".tabs-nav-button").click();
} else { //Считывание номера вкладки при переадресации с главной страницы 
    var number_id = tabId.slice(-1);
    document.querySelector(".tabs-nav-button:nth-child(" + number_id + ")").click();
    tabId = "#tab_1";
    sessionStorage.setItem("tabId", tabId);
}