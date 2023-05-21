
const CountryDetail = ({country}) => {

    return (
      <div className="country-detail">
        The capital of {country.name.common} is {country.capital}, 
        the population is {country.population}.
        They drive on the {country.car.side} and This is its flag
        <img src = {country.flags.png}></img>
      </div>
    )
}
  
export default CountryDetail;