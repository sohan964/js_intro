// https://restcountries.com/#endpoints-all

loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
const displayCountries = (countries) =>{
    //old way
    // for(const country of countries){
    //     console.log(country);
    // }
    
    // new way
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country =>{
       // console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add("country");
        countryDiv.innerHTML = `
        <h3> Name: ${country.name.common} </h3>
        <h4> status: ${country.status} </h4>
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `
        countriesContainer.appendChild(countryDiv);
    })
}

const loadCountryDetail = (code) =>{
    //  https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
     .then(res => res.json())
     .then(detail =>displayCountryDetail(detail[0]));
}

const displayCountryDetail = (detail) =>{
        const countryDetail = document.getElementById('country-detail');
        countryDetail.innerHTML =`
            <h2> Details: ${detail.name.common} </h2>
            <img src="${detail.flags.png}">
        `
}
loadCountries();

//next practice https://www.themealdb.com/api.php