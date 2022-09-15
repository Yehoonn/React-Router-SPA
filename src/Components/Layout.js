import { Outlet, useNavigate } from "react-router-dom";

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
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
