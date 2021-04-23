import React, { useState, useEffect } from 'react';
import PublishedInventory from './PublishedInventory';

const InventoryDisplay = props => {
  return (
    <>
      <div className="big-inv-container">
        <h2>{props.item_name}</h2>
        <p>{props.description}</p>
        <p>${props.price_in_cents}</p>
        <p>{props.quantity_available} available</p>
        {props.published ? <p>Published</p> : <p>Not published</p>}
      </div>
    </>
  );
};
export default InventoryDisplay;
