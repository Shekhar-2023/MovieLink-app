
import './App.css';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'
import Home from './component/Home';
import MovieCreate from './component/MovieCreate';
import MovieUpdate from './component/MovieUpdate';
import MovieList from './component/MovieList';
import MovieSearch from './component/MovieSearch';
import Navbars from './component/Navbars';
import 'bootstrap/dist/css/bootstrap.min.css';


// Created route here for every component


function App() {
  return (
    <div className="App">

      <Router>

        <Navbars />
        <h3 >Welcome to free movie links</h3>
        <h4>Find Your Favourite Movie Links Here....!</h4>
        <Routes>

          <Route path='/list' element={<MovieList />}>
          </Route>
          <Route path='/create' element={<MovieCreate />}>
          </Route>
          <Route path='/search' element={<MovieSearch />}>
          </Route>

          <Route path='/update/:id' element={<MovieUpdate />}
            render={props => (<MovieUpdate {...props} />)}
          >
          </Route>
          <Route exact path='/' element={<Home />}>
          </Route>
        </Routes>

      </Router>


    </div>
  );
}

export default App;
