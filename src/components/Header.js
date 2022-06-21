import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  background-color: rgba(255, 255, 255, 0.5);
  justify-content: center;
  align-items: center;
`;

const Menu = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  a {
    font-size: 20px;
    font-weight: 900;
    color: black;
  }
`;

const Menus = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
`;

const Subpage = styled.div`
  a {
    font-size: 15px;
    font-weight: 900;
    color: rgba(0, 0, 0, 0.8);
  }
`;

const Subpages = styled.div`
  a {
    font-size: 15px;
    font-weight: 900;
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const Header = () => {
  return (
    <Wrap>
      <Menu>
        <Logo>
          <Link to="/">로고</Link>
        </Logo>
        <Menus>
          <Subpage>
            <Link to="/subpage">메뉴1</Link>
          </Subpage>
          <Subpages>
            <Link to="/subpages">메뉴2</Link>
          </Subpages>
        </Menus>
      </Menu>
    </Wrap>
  );
};
