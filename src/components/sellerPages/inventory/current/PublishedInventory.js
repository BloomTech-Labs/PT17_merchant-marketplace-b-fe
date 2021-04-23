import React, { useContext, useState, useEffect } from 'react';
import { ItemContext } from '../../../../state/contexts/ItemContext';

const InventoryDisplay = props => {
  const { data, setData } = useContext(ItemContext);

  return (
    <>
      <h2>Published Items:</h2>
      {data.map(item => (
        <h3>{item.item_name}</h3>
      ))}
    </>
  );
};
export default InventoryDisplay;
