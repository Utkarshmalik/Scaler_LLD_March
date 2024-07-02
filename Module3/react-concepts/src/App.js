import logo from './logo.svg';
import './App.css';
import Welcome from './Pages/Welcome';
import Counter from './Pages/Counter';
import TodoList from './Pages/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList/>
      <Counter/>
      <Welcome name="Utkarsh"/>
    </div>
  );
}

export default App;
