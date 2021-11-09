import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

window.renderPayment = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId)
  );
};

window.unmountPayment = (containerId) => {
  if (document.getElementById(containerId)) {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
  }
};

if (!document.getElementById("Payment-container")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
