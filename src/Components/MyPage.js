import { Navigate } from "react-router-dom";

let isLogin = false;

// Navigate 태그 사용, isLogin의 상태에 따라 페이지 이동이 변한다

const MyPage = () => {
  if (!isLogin) {
    isLogin = !isLogin;
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  if (isLogin) {
    isLogin = !isLogin;
    return <div>My Page</div>;
  }
};
export default MyPage;
