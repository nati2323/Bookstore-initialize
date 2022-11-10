import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Books from './components/Books/BookContainer';
import Category from './components/CategoriesPage/categories';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <nav>
        <h1>Bookstore CMS</h1>
        <ul>
          <li><Link to="/">Books</Link></li>
          <li><Link to="/CATEGORIES">CATEGORIES </Link></li>
        </ul>
        
</nav>
      <Switch>
        <Route exact path="/"><Books /></Route>
        <Route path="/CATEGORIES"><Category /></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
