import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  position: absolute;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const NotFound = () => {
  return (
    <>
      <StyledDiv>
        Error 404
        <NavLink to="/">집으로</NavLink>
      </StyledDiv>
    </>
  );
};

export default NotFound;
