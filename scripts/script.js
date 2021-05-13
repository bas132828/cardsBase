"use strict";
//input search field
const searchInput = document.querySelector(".search--div__text");

//switching search types and button styles
const nameSearch = document.querySelector(".name");
const groupSearch = document.querySelector(".group");
const countrySearch = document.querySelector(".country");
const yearSearch = document.querySelector(".year");
//containers
const searchContainer = document.querySelectorAll(".search-type--container");
const wrapper = document.querySelector(".wrapper-search-type--container");

const nameSearchFn = function () {
  searchInput.value = "Type name...";
  console.log("1");
  nameSearch.style.background = "rgba(24, 188, 149, 0.33)";
  groupSearch.style.background = "#c4c4c4";
  countrySearch.style.background = "#c4c4c4";
  yearSearch.style.background = "#c4c4c4";
};
const groupSearchFn = function () {
  searchInput.value = "Type group №...";
  console.log("2");
  nameSearch.style.background = "#c4c4c4";
  groupSearch.style.background = "rgba(24, 188, 149, 0.33)";
  countrySearch.style.background = "#c4c4c4";
  yearSearch.style.background = "#c4c4c4";
};
const yearSearchFn = function () {
  searchInput.value = "Type year...";
  console.log("3");
  nameSearch.style.background = "#c4c4c4";
  groupSearch.style.background = "#c4c4c4";
  countrySearch.style.background = "#c4c4c4";
  yearSearch.style.background = "rgba(24, 188, 149, 0.33)";
};
const countrySearchFn = function () {
  searchInput.value = "Type country...";
  console.log("4");
  nameSearch.style.background = "#c4c4c4";
  groupSearch.style.background = "#c4c4c4";
  countrySearch.style.background = "rgba(24, 188, 149, 0.33)";
  yearSearch.style.background = "#c4c4c4";
};

nameSearch.addEventListener("click", nameSearchFn);
groupSearch.addEventListener("click", groupSearchFn);
countrySearch.addEventListener("click", countrySearchFn);
yearSearch.addEventListener("click", yearSearchFn);

//////////////////////////////////
// simulating objects
const card1 = {
  nameRus: "Жулиен Туссаин",
  nameEng: "Julienne Tussaint",
  year: 6,
  faculty: "Лечебное дело",
  image: "images/julien.jpg",
  status: "🐱‍🐉",
};
const card2 = {
  nameRus: "Максим Евстигнеев",
  nameEng: "Maxim Evstigneev",
  year: 1,
  faculty: "Лечебное дело",
  image: "images/maxim.jpg",
  status: "🐱",
};

const dataBase = [card1, card2];

///////////////////////////

const renderCards = function (obj) {
  const html = `
     <div class="result-card">
         <div class="result-card--item">
          <img src="${obj.image}" alt="photo" />
         </div>
         <div class="result-card--item name">
           ${obj.nameRus} <br/> ${obj.nameEng}
         </div>
         <div class="result-card--item status">${obj.status}</div>
         <div class="result-card--item faculty">${obj.faculty}</div>
     </div>`;
  console.log(html);
  console.log(wrapper);
  countrySearch.insertAdjacentHTML("afterend", html);
};

searchInput.addEventListener("change", function (e) {
  searchContainer.forEach((e) => (e.style.display = "none"));
  const request = searchInput.value;
  const object = dataBase[dataBase.findIndex((el) => el.nameRus === request)];
  renderCards(object);
  ////
  searchInput.value = "";
});
