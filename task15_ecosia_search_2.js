// ==UserScript==
// @name         Bot for Ecosia (поисковик)
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  habr.com vacancies autosearch
// @author       Maxim Epifanov
// @match        https://www.ecosia.org/*
// @match        https://habr.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let input = document.getElementsByName("q")[0];
    let searchBtn = document.getElementsByClassName("search-form__submit")[0];

    let treesCounter = document.getElementsByClassName("counter__count-wrapper")[0];
    let links = document.links;
    let keywords = ["java разработчик", "full-stack разработчик", "front-end разработчик","Руководство для начинающих по серверной веб-разработке с Node.js"];
    let keyword = keywords[getRandom(0,keywords.length)];


    if (treesCounter !== undefined) {/// Определение главной страницы поисковика
        let i=0;
        let timerId = setInterval(()=> {
            input.value += keyword[i];
            i++;
            if (i==keyword.length) {
                clearInterval(timerId);
                searchBtn.click();
            }
        },100);

    } else if (location.hostname == "habr.com") {///Работаем с выдачей на сайте habr.com

        setInterval(() => {
            if (getRandom(0,101) >= 80) {
                location.href = "https://www.ecosia.org";
            }
            let index = getRandom(0,links.length);
            let link = links[index];
            if (link.href.inсludes("habr.com")) {
                link.click();
            }
        }, getRandom(2000,3500));


    } else { /// Работа в поисковой выдаче

        console.log("We are in search results");
        let nextPage = true;
        for (let i = 0; i < links.length; i++) {
            if (links[i].href.includes("habr.com")) {
                let link = links[i];
                nextPage=false;
                console.log("Нашел ссылку! - " + link);

                setTimeout(() => {
                    link.click();
                }, getRandom(2500,4000))
            }
        }

        let paging = document.querySelectorAll(".count")[0];
        if (paging !== undefined && paging.innerText == "Page 5") {
            nextPage = false;
            location.href = "https://www.ecosia.org";
        }

        if (nextPage) {
            setTimeout(()=> {
                if (paging === undefined) {
                    document.getElementsByClassName("button__text")[14].parentNode.click()
                }else {
                    document.getElementsByClassName("button__text")[12].parentNode.click()
                }
            }, getRandom(4000,4500));
        }



    }
    function getRandom(min,max) {
        return Math.floor(Math.random() * (max-min) + min);
    }

})();
