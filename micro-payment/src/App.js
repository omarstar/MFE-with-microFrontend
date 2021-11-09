import CardMessage from "./components/card-message/CardMessage";
import DeliveryAddress from "./components/DeliveryAddress";
import DeliveryTime from "./components/DeliveryTime";
import NoteFloward from "./components/note-to-floward/NoteFloward";
import OrderList from "./components/OrderList";
import PaymentOptions from "./components/PaymentOptions";
import "./App.css";

function App({ history }) {
  return (
    <main className="p-3 m-10">
      <section className="logo-title flex justify-center items-center mb-6">
        <img src="Floward-Logo" alt=""></img>
        <h3 class="text-primary-color font-bold"> FLOWARD </h3>
      </section>
      <section className="user-details bg-primary-color bg-opacity-20 rounded p-2 mb-6">
        <h2 className="font-bold"> Hello George, </h2>
        <p>
          {" "}
          This is details for your order #2938453 please review it before
          payment{" "}
        </p>
      </section>
      <OrderList />
      <DeliveryAddress />
      <DeliveryTime />
      <CardMessage />
      <PaymentOptions />
      <NoteFloward />
      <section className="summary mb-6 border-b-2 pb-4">
        <h2 className="font-bold mb-4">Summary</h2>
        <div className="flex justify-between">
          <p>Subtotal </p>
          <p> KDW 25.000</p>
        </div>
        <div className="flex justify-between">
          <p>Discount </p>
          <p> KDW 5.000</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery charge </p>
          <p> Free</p>
        </div>
        <div className="flex justify-between">
          <p>VAT(5%) </p>
          <p> KDW 2.000</p>
        </div>
        <div className="flex justify-between">
          <p>Total </p>
          <p> KDW 300.000</p>
        </div>
      </section>
      <section className="call-to-action">
        <button
          type="button"
          className="bg-primary-color text-white w-full px-auto py-3 rounded"
        >
          Pay KWD 45.800
        </button>
      </section>
    </main>
  );
}

export default App;
