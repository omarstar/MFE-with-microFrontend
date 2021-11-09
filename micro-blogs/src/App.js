import "./App.css";
import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Blog />
    // <Router>
    //   <Routes>
    //     <Route exact path="/" component={Blog} />
    //     <Route exact path="/blogdetail/:blogid" component={BlogDetail} />
    //   </Routes>
    // </Router>
  );
}

export default App;
