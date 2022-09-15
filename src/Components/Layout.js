import { Outlet, useNavigate } from "react-router-dom";

// 공통으로 사용해야하는 컴포넌트를 관리하기위해 사용되는 Outlet
// Link나 NavLink를 사용하지 못하는 경우엔 useNavigate를 사용할 수 있다

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goFront = () => {
    navigate(+1);
  };

  const goArticles = () => {
    navigate("/articles");
  };

  const goMain = () => {
    navigate("/");
  };

  const goMyPage = () => {
    navigate("/myPage");
  };
  return (
    <div>
      <header
        style={{
          background: "lightgray",
          padding: 16,
          fontSize: 24,
          display: "flex",
          gap: 20,
        }}
      >
        <button onClick={goBack}>뒤로 가기</button>
        <button onClick={goFront}>앞으로 가기</button>
        <button onClick={goMain}>메인 화면</button>
        <button onClick={goArticles}>게시글 목록</button>
        <button onClick={goMyPage}>마이 페이지</button>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
