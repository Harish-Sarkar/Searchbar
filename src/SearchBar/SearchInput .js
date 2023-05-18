import React from 'react';

function SearchInput(props) {
  
  const handleChange = (event) => {
    props.onSearch(event.target.value);
  };

  return (
    <div>
      <input 
      style={{'borderRadius':'5px', 'padding': '5px'}} 
      type="text" placeholder="Search User by Id, Address, Name" 
      onChange={handleChange} />
    </div>
  );
}

export default SearchInput;
