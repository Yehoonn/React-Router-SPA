import { useSearchParams } from "react-router-dom";

// 리액트 라우터의 기능인 useSearchParams를 사용
// 어떤 데이터를 조회할때 key와 value를 사용하는 쿼리스트링을 편하게 설정하게해줌

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");
  const type = searchParams.get("type");
  // -> searchParams : ?detail=''& mode=''& type=''

  // 함수가 실행되면 쿼리스트링의 값을 변경한다
  const onToggleDetail = () => {
    setSearchParams({
      mode: mode === null ? 1 : mode,
      detail: detail === "true" ? false : true,
      type: "about",
    });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({
      mode: nextMode,
      detail: detail === null ? true : detail,
      type: "user",
    });
  };

  return (
    <>
      <h1>이곳은 About페이지 입니다</h1>
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <p>type : {type}</p>
      <p>searchParams : {searchParams}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
      <div></div>
    </>
  );
};

export default About;
