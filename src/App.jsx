import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import TodoApp from "./components/TodoApp/TodoApp";
import ThemeContextParent from "./contexts/ThemeContext";


function App() {
  return (
    <ThemeContextParent>
      <Container>
        <Header />
        <TodoApp />
      </Container>
    </ThemeContextParent>
  );
}

export default App;
