const BASE_URL = 'https://restcountries.com/v2';
const filter = 'name,capital,population,flags,languages';

export function fetchCountries(countryName) {
    return fetch(`${BASE_URL}/name/${countryName}?fields=${filter}`)
        .then(response => response.json())
}

// export {fetchCountries};

