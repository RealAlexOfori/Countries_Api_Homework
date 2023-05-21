import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';
import './CountriesContainer.css';
import CountryDetail from '../components/CountryDetail';
import CountrySelect from '../components/CountrySelect';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favouriteCountries, setFavouriteCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const updateSelectedCountry = function(country) {
        setSelectedCountry(country)
    }
    const handleFavouriteCountry = function() {
        if (selectedCountry && !favouriteCountries.includes(selectedCountry)) { setFavouriteCountries([...favouriteCountries,selectedCountry])}

    }
    return (
        <div>
        <div className="main-container">
            
            <CountrySelect countries={countries} updateSelectedCountry={updateSelectedCountry}/>
            {selectedCountry ? <CountryDetail country={selectedCountry}/> : null }
            <h2>total population: {countries.reduce((total,country) => total += country.population,0)}</h2>
        </div>
        <button onClick={handleFavouriteCountry}>Favourite Country</button>
        <h2>My favorite Countries:</h2> 
        <CountryList countries={favouriteCountries} />
        </div>
    )
}

export default CountryContainer;
