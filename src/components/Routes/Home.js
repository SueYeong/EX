import styled from "styled-components";
import { Sub } from "../Sub";

const Banner = styled.div`
  width: 100vw;
  height: 70vh;
  background: url(https://images.alphacoders.com/437/437081.jpg) no-repeat
    center / cover;
`;

export const Home = () => {
  return (
    <div>
      <Banner>
        <h3>메인</h3>
      </Banner>
      <Sub />;
    </div>
  );
};
