const countryElem = document.querySelector('#country-phone');
const countryList = document.querySelector(".country-list");

function countryListShow(event) {
  countryList.classList.add('.show');
}

countryElem.addEventListener('click', countryListShow, true);

