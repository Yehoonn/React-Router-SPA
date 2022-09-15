import { Route, Routes } from "react-router-dom";
import About from "../Components/About";
import Article from "../Components/Article";
import Articles from "../Components/Articles";
import HomePage from "../Components/HomePage";
import Layout from "../Components/Layout";
import Login from "../Components/Login";
import MyPage from "../Components/MyPage";
import NotFound from "../Components/NotFound";
import Profile from "../Components/Profile";
import ReturnHome from "../Components/ReturnHome";

import "./App.css";

function App() {
  return (
    <>
      {/* ReactRouter의 Route는 Routes안에 있어야함 */}
      <Routes>
        {/* path => url 경로, element => 보여줄 컴포넌트 */}
        <Route element={<Layout />}>
          <Route element={<ReturnHome />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/About" element={<About />}></Route>
            {/* profiles의 user 데이터 (yehoon, geunsoo)의 경로를 편하게 설정해준다 */}
            <Route path="/profiles/:user" element={<Profile />}></Route>
            {/* 중첩 라우팅 */}
            <Route path="/Articles" element={<Articles />}>
              <Route path=":id" element={<Article />} />
            </Route>
            {/* Navigator를 사용, 
            MyPage에 들어갔지만 login이 true가 아니면 login 경로로 이동된다  */}
            <Route path="/login" element={<Login />}></Route>
            <Route path="/myPage" element={<MyPage />}></Route>
          </Route>
        </Route>
        {/* 페이지에 오류가 발생했을시에 NotFound 컴포넌트를 보여준다 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
