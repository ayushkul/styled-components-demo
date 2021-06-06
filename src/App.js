import styled, { css, ThemeProvider } from "styled-components";

const theme = {
  primary: "blue",
  secondary: "cyan",
  font: "sans-serif",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  & input {
    width: auto;
  }
  @media (max-width: 720px) {
    & input {
      width: 100%;
    }
  }
`;

const HeadingComponent = styled.h1`
  font-family: ${(props) => props.theme.font};
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 4px;
  margin: 10px;
`;

const Button = styled.button`
  ${(props) =>
    props.isValid
      ? css`
          color: white;
          background: green;
        `
      : css`
          color: red;
          background: yellow;
        `}
  padding: 5px;

  &:hover {
    background: ${(props) => props.theme.secondary};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <HeadingComponent>Styled Components</HeadingComponent>
        <Input placeholder="username" />
        <Input placeholder="password" />
        <Button isValid={true}>Login</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
