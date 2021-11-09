import { arrBlogs } from "../constants";
import { Link } from "react-router-dom";

const Blogs = () => {
  console.log("blog reached!");
  return (
    <main className="container mt-5 border border-primary">
      <div className="row">
        {arrBlogs.map((blog, index) => {
          return (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-5">
              <div className="card">
                <Link
                  to={{
                    pathname: `/blogdetail/${blog.blogID}`,
                    id: blog.blogID,
                    item: blog,
                  }}
                ></Link>
                <div class="card-body">
                  <h5 class="card-title">{`#${blog.blogID}`}</h5>
                  <p class="card-text">{blog.blogName}</p>
                  <p class="card-text">{blog.blogDetail}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Blogs;
