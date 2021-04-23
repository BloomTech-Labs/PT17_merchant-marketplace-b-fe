import React from 'react';
import SmallItemCard from '../../../../common/cards/smallItem';

function InvSection(props) {
  console.log('invsection props', props);
  return (
    <>
      {/* original code ---> */}
      {/* <h2>Inventory</h2>
      <h4>Details</h4> */}
      {/* <SmallItemCard headerText="Option Text" descText="Subtext" /> */}
      {/* <---- original code */}
      <div className="dash-inv-item">
        <h3>{props.item_name}</h3>
        <p>{props.description}</p>
        <p>${props.price_in_cents}</p>
        <p>{props.quantity_available} available</p>
      </div>
    </>
  );
}
export default InvSection;
