import { Outlet } from "react-router-dom";
import ArticleItems from "./ArticleItems";

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <ArticleItems id={1} />
        <ArticleItems id={2} />
        <ArticleItems id={3} />
      </ul>
    </div>
  );
};

export default Articles;
