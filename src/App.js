import './App.css';
import TodoList from './component/TodoList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h2 className='header'>TODO LIST</h2>
      <TodoList />
    </div>
  );
}

export default App;
