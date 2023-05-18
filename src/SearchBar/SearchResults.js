import React from 'react';
import UserCard from './UserCard';

function SearchResults(props) {
  const filteredUsers = props.users?.filter(user => {
    const searchFields = ['id', 'name', 'items', 'address', 'pincode'];
    for (let i = 0; i < searchFields.length; i++) {
      const field = searchFields[i];
      if (field === 'items') {
        if (user[field].some(item => item.toLowerCase().includes(props.searchText.toLowerCase()))) {
          return true;
        }
      } else {
        if (typeof user[field] === 'string' && user[field].toLowerCase().includes(props.searchText.toLowerCase())) {
          return true;
        }
      }
    }
    return false;
  });

  if (!props.searchText) {
    return null;
  }

  return (
    <div className="search-results-container">
      {filteredUsers?.length > 0 
      ?
      ( filteredUsers.map(user => <UserCard key={user.id} user={user} searchText={props.searchText} />))
      : 
      (
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', margin: '20px 0'}}>
            <h2>No Data found!</h2>
        </div>
        )}
    </div>);
}

export default SearchResults;



