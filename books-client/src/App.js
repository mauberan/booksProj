import logo from './logo.svg';
import './App.css';
import './components/BooksList/BooksList'
import BooksList from "./components/BooksList/BooksList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SingleBook from "./components/SingleBook/SingleBook";


function App() {
  return (
    <div className="App">
        {/*<div>*/}
        {/*  <BooksList></BooksList>*/}
        {/*</div>*/}
      <Router>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>

            <Route path="/books/:id" component={SingleBook}></Route>
            <Route path="/">
              <BooksList></BooksList>
            </Route>

          </Switch>
      </Router>
    </div>



  );
}

export default App;
