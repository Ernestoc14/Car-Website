"use client"
import React from 'react'

const SearchBar = () => {
  const handleSearch = (e) => {
    e.preventDefault()
    console.log('searching')
  }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'></div>
    </form>
  )
}

export default SearchBar