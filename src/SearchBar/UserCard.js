
import React from 'react';

function UserCard(props) {
  const { id, name, items, address, pincode } = props.user;

  const highlightMatch = (str) => {
    if (!props.searchText) {
      return str;
    }
    const regex = new RegExp(props.searchText, 'gi');
    const matchIndex = str.toLowerCase().indexOf(props.searchText.toLowerCase());
    const matches = str.match(regex);
    if (!matches) {
      return str;
    }
    return (
      <>
        <div style={{color: 'green'}} >"{props.searchText}" found in User</div>
        {str.slice(0, matchIndex)}
        <span style={{ backgroundColor: 'blue' }}>{matches[0]}</span>
        {str.slice(matchIndex + props.searchText.length)}
      </>
    );
  };

  return (
     <div style={{'border': 'solid 3px grey', 'margin': '10px 0'  }}>
      <div>{highlightMatch(`ID: ${id}`)}</div>
      <div>{highlightMatch(`Name: ${name}`)}</div>
      <div>{highlightMatch(`Items: ${items}`)}</div>
      <div>{highlightMatch(`Address: ${address}`)}</div>
      <div>{highlightMatch(`Pincode: ${pincode}`)}</div>
    </div>
  );
}

export default UserCard;



