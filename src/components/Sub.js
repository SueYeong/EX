import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuWrap = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SSub = styled.div`
  width: 400px;
  height: 500px;
  background: url(https://i.pinimg.com/550x/4a/6f/59/4a6f59296f90c11d77744720ca10d1af.jpg)
    no-repeat center / cover;
  box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.5);
  position: relative;
  bottom: 0;
  right: 0;
  transition: 1s;
  &:hover {
    bottom: 10px;
    right: 10px;
    /* transform: translate(10px, 10px); */
  }
`;
const Subs = styled.div`
  width: 400px;
  height: 500px;
  background: url(https://images.pexels.com/photos/589840/pexels-photo-589840.jpeg?cs=srgb&dl=pexels-valiphotos-589840.jpg&fm=jpg)
    no-repeat center / cover;
  box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.5);
  transition: 1s;
  position: relative;
  bottom: 0;
  right: 0;
  &:hover {
    bottom: 10px;
    right: 10px;
  }
`;

export const Sub = () => {
  return (
    <div>
      <MenuWrap>
        <Menu>
          <Link to="/subpage">
            <SSub></SSub>
          </Link>

          <Link to="/subpages">
            <Subs></Subs>
          </Link>
        </Menu>
      </MenuWrap>
    </div>
  );
};
