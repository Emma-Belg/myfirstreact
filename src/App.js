//I am following a tutorial from here https://www.youtube.com/watch?v=dGcsHMXbSOA and it says to delete everything here so I have commented it out for now
//This is component. A component is basically a thing that holds html, logic and even styling inside one file. Think of it as a container for these things and it is self contained

// the first thing you ALWAYS need to do when creating a component is to import React from react

//Note about State
//A State is basically data, so you can think of it like a variable. Your app will render itself based on the data held in the state. Eg 'is logged in' could be a bool that is false or true, and based on that state, the app changes. to use states you need to import {useState} after a comma in the same line you have imported React
import React, {useState} from 'react';

//These are both imported from the saySomething.js file that I have created in the src folder
//The first is the default export and is written normally, the other is a specific function and must be referenced with the {}
//read more here: https://dev.to/laurieontech/exports-and-imports-and-defaults-oh-my-fa3
import Bye, {OkCheckingTwoFunctionsInOneThing} from './saySomething';
//import Bye from './saySomething';


//create the component by writing a function
function theNameDoesntNeedtoMatchWhatIsInTheIndexjs() {

    const [isRed, setRed] = useState(false);
    const[count, setCount] =useState(0);
    const sayHello = () => {

        console.log("Hello");
    };
    return (
        //Though this looks like html, it is actually js that is then compiled into html
        //it is jsx - jsx allows you to put html into js rather than the vanilla js way of putting js into html
        // <div> is ~ to: React.createElement(div)
        <div className="App">
            <h1>My First React</h1>
            <h2>This is the App Component</h2>
            <button></button>
            {/*vanilla js way:
        document.querySelector('.hello');
        hello.addEventListener().onclick()

        Note: using the curly bracket inside this 'html' means that you can put js inside of the jsx
        Note: don't use the () after the function name as that will invoke the function immediately instead of on the click
        */}
            <button onClick={sayHello}>Hello</button>

            {/*this is referring to the two functions that I have written in the saySomething file that is imported above.
        Props = properties*/}

            < Bye name="DevEd" message="Thanks Dev Ed for this tutorial"/>
            < Bye name="You" message="I hope that you aren't reading this"/>
            < Bye name="Me" message="I am just starting to learn this all"/>
            <OkCheckingTwoFunctionsInOneThing/>

        </div>

    );
}


//Note - do not use the () after the function name, like you normally do when calling on a function.
export default theNameDoesntNeedtoMatchWhatIsInTheIndexjs;


/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
