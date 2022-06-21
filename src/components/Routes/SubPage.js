import styled from "styled-components";

const Wrap = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 400px;
  height: 500px;
  background: url(https://i.pinimg.com/550x/4a/6f/59/4a6f59296f90c11d77744720ca10d1af.jpg)
    no-repeat center / cover;
`;

const Title = styled.div`
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

const STitle = styled.div`
  font-size: 50px;
  font-weight: 900;
`;

const Sec = styled.div`
  font-size: 15px;
  font-weight: 100;
  margin-top: 100px;
`;

export const SubPage = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Wrap>
        <Box></Box>
        <Title>
          <STitle>Why do we use it?</STitle>
          <Sec>
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like).
          </Sec>
        </Title>
      </Wrap>
    </div>
  );
};
