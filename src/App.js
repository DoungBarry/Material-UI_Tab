import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Home from "./Home"
import{BrowserRouter as Router} from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
     <Header/>
  
      <Home/>
    </div>
  );
}

export default App;
