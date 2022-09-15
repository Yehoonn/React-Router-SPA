import { Link, useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");
  const type = searchParams.get("type");

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
      <Link to="/">Home 바로가기</Link>
    </>
  );
};

export default About;
