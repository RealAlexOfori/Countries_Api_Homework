// CountrySelect( { countries: [{}, {}], updateSelectedCountry: () => {} } )

const CountrySelect = (props) => {

  // TODO: refactor this - index not great as a key
  // TODO: make this accessible - label
  const countryOptions = props.countries.map((country, index) => {

    return <option key={index} value={index}>{country.name.common}</option>

  })

  if (props.countries.length === 0){
    return null
  }

  const handleOnChange = (evt) => {
    const index = evt.target.value
    const country = props.countries[index]
    props.updateSelectedCountry(country)
  }

  return (
    <div>
      <select onChange={handleOnChange}>
        {countryOptions}
      </select>
    </div>
  )

}


export default CountrySelect