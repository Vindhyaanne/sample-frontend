import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListUserComponent from './components/ListUserComponent';
import AddUserComponent from './components/AddUserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <Router>
      <HeaderComponent />
        <Routes>
          <Route path = "/" exact element={<ListUserComponent />}></Route>
          <Route path = "/users" exact element={<ListUserComponent />}></Route>
          <Route path = "/add-user" exact element={<AddUserComponent />}></Route>
        </Routes>
        <FooterComponent />
      </Router>  
    </div>
  );
}

export default App;