import React from 'react';
import './ListItem.css';

const ListItem = ({country}) => {

  // const handleClick = function() {
  //   console.log(`Clicked on ${country.name.common}`)
  //   onCountryClicked(country)
  // }

  return <li >{country.name.common} </li>
}

export default ListItem;