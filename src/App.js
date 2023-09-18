import './App.css';
import { AddTodo } from './components/AddTodo';
import { NavBar } from './components/NavBar';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { RemoveTodo } from './components/RemoveTodo';
import { AllTodos } from './components/AllTodos';
import { TodoById } from './components/TodoById';
import { HelloPage } from './components/HelloPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <NavBar />
        <Routes>
          <Route path="" element={<HelloPage/> }></Route>
          <Route path="addTodo" element={<AddTodo />}></Route>
          <Route path="removeTodo" element={<RemoveTodo />}></Route>
          <Route path="allTodos" element={<AllTodos />}></Route>
          <Route path="todoById" element={<TodoById />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
