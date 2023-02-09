export function listMarkup(countryList) {
  console.log(`В listMarkup: ${countryList}`);
  return countryList.map(
      ({ name, flags }) =>
        `<li><img src="${flags.svg}" alt="${name}" width="40" class="flag"><span class="country-name">${name}</span></li>`,
  ).join('');
}

export function cardMarkup(country) {
  console.log(`В cardMarkup: ${country}`);
  const { name, capital, population, flags } = country;
  const languages = country.languages.map(language => { return language.name }).join(', ');

  return `<h1><img src="${flags.svg}" alt="${name}" width="40" class="flag">${name}</h1>
    <p><b>Capital:</b> ${capital}</p>
    <p><b>Population:</b> ${population}</p>
    <p><b>Languages:</b> ${languages}</p>`;
}