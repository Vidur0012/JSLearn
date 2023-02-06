const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
    console.log("rendering called with ");
    const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region.common}</h4>
      <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
        ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

const whereAmI = function (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(resp => {
            console.log(resp);
            if (!resp.ok)
                throw new Error(`Problem with geocoding ${resp.status}`);
            return resp.json();
        })
        .then(data => {
            console.log(`You are in ${data.city}, ${data.country}`);
            return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
        })
        .then(resp => {
            if (!resp.ok) 
                throw new Error(`Country not found (${resp.status})`);
            return resp.json();
        })
        .then(data => {
            console.log(data[0]);
            renderCountry(data[0]);
        })
        .catch(err => console.log("Something went wrong, " + err.message))
};

// whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);