import React, { useState } from 'react';
import SearchResults from './SearchBar/SearchResults';
import SearchInput from './SearchBar/SearchInput ';
import Users from './SearchBar/Users';
import './App.css'

function App() {

    const [searchText, setSearchText] = useState('');

  return (
    <div className='App' >
        <h1>User Search</h1>
     <SearchInput onSearch = {(text) => setSearchText(text)} />   
    <SearchResults searchText = {searchText} users = {Users} />
    
    </div>
  )
}

export default App