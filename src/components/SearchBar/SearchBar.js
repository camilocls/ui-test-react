import React from 'react'
import './SearchBar.scss'
import iconSearch from '../../assets/icon-search.svg'

const SearchBar = (props) => {

  return (
    <button className={`search-bar ${props.className}`}>
      <img src={iconSearch} alt="Search"/>
    </button>
  )
} 

export default SearchBar
