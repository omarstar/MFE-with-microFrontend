import React from 'react';

const OrderItem = (props) => {
  return (
    <li className="border-2 rounded grid grid-flow-col p-2 mb-4">
      <img src="images/flower.png" alt="" className="w-8 h-12 mr-2"></img>
      <div className="item-desc flex flex-col">
        <p className="text-sm">
          Nagwa Woven Gift Basket <br />
          Baby Rose with sweet from Nagwa
        </p>
        <div className="qty text-sm">Qty:1</div>
      </div>
      <div className="price text-sm">KDW 25.00</div>
    </li>
  );
};

export default OrderItem;
