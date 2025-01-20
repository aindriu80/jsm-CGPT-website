import Article from "../../components/article/Article.tsx";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt__blog section__padding" id="blog">
      <div className="gpt__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it
        </h1>
      </div>
      <div className="gpt__blog-container">
        <div className="gpt__blog-container_groupA">Article</div>
        <div className="gpt__blog-container_groupB">
          <Article imgUrl={blog01} />
          <Article imgUrl={blog02} />
          <Article imgUrl={blog03} />
          <Article imgUrl={blog04} />
          <Article imgUrl={blog05} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
