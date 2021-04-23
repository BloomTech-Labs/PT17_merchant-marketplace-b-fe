import React, { useContext, useState, useEffect } from 'react';
import { ItemContext } from '../../../../state/contexts/ItemContext';
const Drafts = props => {
  const { data, setData } = useContext(ItemContext);

  return (
    <>
      <h2>Drafts:</h2>
      {data.map(item => (
        <h3>{item.published ? null : item.item_name}</h3>
      ))}
    </>
  );
};
export default Drafts;
