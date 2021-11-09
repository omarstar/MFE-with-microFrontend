import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserHistory } from "history";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import Blogs from "./routes/blogs";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" elememt={<Blogs />} />
        <Route exact path="blog" elememt={<Blog />} />
        <Route exact path="blogdetail/:blogid" element={<BlogDetail />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem", color: "red" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
