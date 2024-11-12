
import './App.css';
//import {HelloWorld, ByeWorld, WelcomeWorld, GoodBye} from './components/HelloWorld';
//import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Contact from './components/Contact';
import Home from './components/Home';

function App() {

  /*const [counter, setCounter] = useState(0);

  const increment = ()=> {
    setCounter(counter + 1)
  }
  
  console.log(counter)


  useEffect(() => {
    document.title = `clicked ${counter} times`
  },[counter])


  /*var counter = 0

  const increment = () => {
    counter = counter + 1
    console.log(counter)
  }*/


  return (
    <div className="App">
      <Router>
    <nav>
      <Link to='/home' className='text'>Home</Link>
      <Link to='/contact' className='text'>Contact</Link>
      <Link to='/about' className='text'>About</Link>
    </nav>

    

    <Routes>
    <Route exact path='/home' Component={Home}/>
    </Routes>

      <Routes>
        <Route path='/contact' Component={Contact}/>
      </Routes>

      </Router>
    </div>
  );
}

export default App;
