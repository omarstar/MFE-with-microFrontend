import OrderItem from './OrderItem';

const OrderList = (props) => {
  return (
    <section className="item-list mb-6">
      <div className="item-list-title mb-4">
        <img src="item-icon" alt=""></img>
        <h2 className="font-bold"> Your Items </h2>
      </div>
      <div className="item-detail">
        <ul>
          <OrderItem />
          <OrderItem />
        </ul>
      </div>
    </section>
  );
};

export default OrderList;
