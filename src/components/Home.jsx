import React from 'react'
import { useState, useEffect } from 'react';
import {HelloWorld, ByeWorld, WelcomeWorld, GoodBye} from './HelloWorld';


function Home ()  {

    const [counter, setCounter] = useState(0);

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
     
      <h1>Hello World</h1>
      <p>Shubham Dixit is learning</p>
      <HelloWorld />
      <ByeWorld/>
      <WelcomeWorld text = " Welcome World How r u?" />
      <GoodBye text = "Good Bye"/>
      <button onClick={increment}>Click me!</button>
      <h1>{counter}</h1>
      
    
    

      </div>  
  
    )
}

export default Home
