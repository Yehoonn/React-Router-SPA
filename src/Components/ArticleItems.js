import { NavLink } from "react-router-dom";

const ArticleItems = ({ id }) => {
  const activeStyle = {
    color: "green",
    fontSize: 24,
  };
  return (
    <>
      <li>
        <NavLink
          to={`/Articles/${id}`}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          게시글 {id}
        </NavLink>
      </li>
    </>
  );
};

export default ArticleItems;
