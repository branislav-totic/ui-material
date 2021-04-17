import { AppContainer } from "./App.css";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Flex, Heading, Wrapper } from "./style";

const testCode: string = `
<Wrapper direction="column" align="center">
  <Heading color="success" as="h2" fontSize="xlg" mb="3">Task 1</Heading>
  <Flex gap="20px" color="white">
    <Flex bg="primary" padding="10px" borderRadius="4px">John</Flex>
    <Flex bg="danger" padding="10px" borderRadius="4px">Don</Flex>
    <Flex bg="warning" padding="10px" borderRadius="4px">Marry</Flex>
  </Flex>
</Wrapper>
`;

const editorStyle: { [key: string]: string } = {
  border: `1px solid white`,
  borderRadius: `4px`,
  marginBottom: `20px`,
};

const App : React.FunctionComponent = () => {
  return (
    <AppContainer>
      <Wrapper h="100vh" bgColor="black" direction="column" align="center" justify="center">
        <Heading color="white" mb="3">Example:</Heading>
          <LiveProvider code={testCode} scope={{ Flex, Heading, Wrapper }}>
            <LiveEditor style={editorStyle} />
            <LiveError />
            <LivePreview />
          </LiveProvider>
      </Wrapper>
    </AppContainer>
  );
};

export default App;
