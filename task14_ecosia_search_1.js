// ==UserScript==
// @name         Bot for Ecosia (поисковик)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  hh.ru vacancies autosearch
// @author       Maxim Epifanov
// @match        https://www.ecosia.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let input = document.getElementsByName("q")[0];
    let searchBtn = document.getElementsByClassName("search-form__submit")[0];

    let counter = document.getElementsByClassName("counter__count-wrapper")[0];
    let links = document.links;
    let keywords = ["Вакансии java разработчик", "Вакансии full-stack разработчик", "Вакансии проджект менеджер лизинг"];
    let keyword = keywords[getRandom(0,keywords.length)];

    if (counter !== undefined) {
        input.value = keyword;
        searchBtn.click();
    } else {
        console.log("We are in search results");
        for (let i = 0; i < links.length; i++) {
            if (links[i].href.includes("hh.ru")) {
                let link = links[i];
                link.click();
                console.log("Found such string - " + link);
            }
        }

    }
    function getRandom(min,max) {
        return Math.floor(Math.random() * (max-min) + min);
    }

})();
