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
  background: url(https://images.pexels.com/photos/589840/pexels-photo-589840.jpeg?cs=srgb&dl=pexels-valiphotos-589840.jpg&fm=jpg)
    no-repeat center/cover;
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

export const SubPages = () => {
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
          <STitle>What is Lorem Ipsum?</STitle>
          <Sec>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Sec>
        </Title>
      </Wrap>
    </div>
  );
};
