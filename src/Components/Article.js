import { useParams, Link } from "react-router-dom";

const Article = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>게시글 {id}</h2>
      <Link to="/">Home 바로가기</Link>
    </div>
  );
};

export default Article;
