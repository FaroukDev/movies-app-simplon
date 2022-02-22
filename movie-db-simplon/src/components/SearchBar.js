import React from 'react';
import '../css/SearchBar.css'

function SearchBar() {
  return (
    <div>
        <header className='header'>
            <span >The Movie DB</span>
            <input className='search' type="text" placeholder="Search..." />
        </header>
    </div>
  )
}

export default SearchBar