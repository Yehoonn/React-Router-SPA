import { Outlet, NavLink } from "react-router-dom";

// NavLink 태그를 사용하면 페이지 라우팅의 상태(isACTIVE)에 따라 스타일링이 가능함

const ReturnHome = () => {
  const disable = {
    display: "none",
  };

  return (
    <>
      <main>
        <Outlet />
      </main>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive === false ? disable : undefined)}
      >
        Home 바로가기
      </NavLink>
    </>
  );
};

export default ReturnHome;
