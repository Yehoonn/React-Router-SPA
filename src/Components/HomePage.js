import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>이곳은 홈페이지 입니다</h1>

      <ul>
        <li>
          <Link to="About">About 바로가기</Link>
        </li>
        <li>
          <Link to="profiles/yehoon">yehoon의 프로필</Link>
        </li>
        <li>
          <Link to="profiles/geunsoo">geunsoo의 프로필</Link>
        </li>
        <li>
          <Link to="profiles/void">존재하지 않는 프로필</Link>
        </li>
        <li>
          <Link to="Articles">게시글 모음</Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
