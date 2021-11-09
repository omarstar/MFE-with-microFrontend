import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "./MicroFrontend";
const defaultHistory = createBrowserHistory();
const { REACT_APP_PAYMENT_HOST: paymentHost, REACT_APP_BLOGS_HOST: blogHost } =
  process.env;

// function BlogDetail({ history }) {
//   return (
//     <div>
//       <MicroFrontend history={history} host={blogHost} name="Blogs" />
//     </div>
//   );
// }
function Blogs({ history }) {
  return (
    <div>
      <MicroFrontend history={history} host={blogHost} name="Blogs" />
    </div>
  );
}

function Payment({ history }) {
  return <MicroFrontend history={history} host={paymentHost} name="Payment" />;
}

function Home({ history }) {
  return (
    <div className="container">
      <p>Im a container hosting two micro frontend using runtime JS</p>
      <Blogs />
      <div className="wrapper-payment">
        <Payment />
      </div>
    </div>
  );
}

function App({ history = defaultHistory }) {
  return (
    <Home />
    // <Router>
    //   <React.Fragment>
    //     <Routes>
    //       <Route exact path="/" component={Home} />
    //       <Route exact path="/blogdetail/:blogid" component={BlogDetail} />
    //     </Routes>
    //   </React.Fragment>
    // </Router>
  );
}

export default App;
