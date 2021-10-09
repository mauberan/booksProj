import logo from './logo.svg';
import './App.css';
import './components/BooksList/BooksList'
import BooksList from "./components/BooksList/BooksList";

function App() {
  return (
    <div className="App">
        <div>
          <BooksList></BooksList>
        </div>
    </div>
  );
}

export default App;
