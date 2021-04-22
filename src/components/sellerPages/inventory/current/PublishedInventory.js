import React, { useState, useEffect } from 'react';

const InventoryDisplay = props => {
  // need to get props from somewhere
  return (
    <>
      {props.published ? (
        <div className="big-inv-container">
          <h2>{props.item_name}</h2>
          <p>{props.description}</p>
          <p>${props.price_in_cents}</p>
          <p>{props.quantity_available} available</p>
        </div>
      ) : (
        <h1>You currently have no published inventory</h1>
      )}
    </>
  );
};
export default InventoryDisplay;
