import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <Title>- styled components -</Title>
      <Button>FIGHT!!</Button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  desplay: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
  color: #3d84a8;
`;

const Button = styled.button`
  backgroud-color: #abedd8;
  border: none;
  padding: 8px;
  barder-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;

// 貼り付けるだけで使用可能
