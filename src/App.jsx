import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import TodoApp from "./components/TodoApp/TodoApp";
import FilterContextParent from "./contexts/FilterContext";
import ThemeContextParent from "./contexts/ThemeContext";
import TodoContextParent from "./contexts/TodoContext";


function App() {
  return (
    <>
      <TodoContextParent>
        <FilterContextParent>
          <ThemeContextParent>
            <Container>
              <Header />
              <TodoApp />
            </Container>
          </ThemeContextParent>
        </FilterContextParent>
      </TodoContextParent>
    </>
  );
}

export default App;
