import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import {listMarkup, cardMarkup} from './js/makeMarkup';


const DEBOUNCE_DELAY = 300;

const inputForm = document.querySelector('#search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');


inputForm.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput (e) {
  const searchQuery = e.target.value.trim();
  //console.log(searchQuery);

  if (searchQuery === '') { 
        countryListEl.innerHTML = '';
        countryInfo.innerHTML = '';
        return;
      };

  fetchCountries(searchQuery)
    .then(array => {

      if (array.length > 10)
      {  Notify.info('Too many matches found. Please enter a more specific name.')
        return;
      };

      if (array.length === 1)
      {  countryListEl.innerHTML = '';
        countryInfo.innerHTML = cardMarkup(array[0])
        return;
      };

      countryInfo.innerHTML = '';
      countryListEl.innerHTML = listMarkup(array);
    })
    .catch(onFetchError)
   
}

function onFetchError(error) {
  if (error) { Notify.failure('Oops, there is no country with that name') };
}


