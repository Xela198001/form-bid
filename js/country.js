const countryElem = document.querySelector('.arrow');
const countryList = document.querySelector(".country-list");


function countryListShow(event) {
  countryList.classList.toggle('show');
  countryList.addEventListener('click', function listHide(event) {
    const target = event.target;
    if (target.matches('.country-item')) { countryList.classList.remove("show"); }
    countryList.removeEventListener('click', listHide);
  })
  
}

countryElem.addEventListener('click', countryListShow, true);

