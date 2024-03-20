import React from 'react';

function Body (props) {
  return (
    <div> 
    <p>{props.comment}</p>
    <p>{props.date}</p>
  </div>
  )
}

export default Body;