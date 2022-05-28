import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import TodoApp from "./components/TodoApp/TodoApp";
import ThemeContextParent from "./contexts/ThemeContext";
import TodoContextParent from "./contexts/TodoContext";


function App() {
  return (
    <>
      <TodoContextParent>
        <ThemeContextParent>
          <Container>
            <Header />
            <TodoApp />
          </Container>
        </ThemeContextParent>
      </TodoContextParent>
    </>
  );
}

export default App;
