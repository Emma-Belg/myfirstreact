import React from 'react';
//You need to also import the css you are using for each module
import "./App.css";

//props = properties or you could write the property name (as written in the App file inside curly brackets
//like this
//function Bye({name, message})
//You do not need to then write the {props.name} below but simply {name}
function Bye(props) {
    const sayBye = () => {

        console.log("bye");
    };
    return (
        //in React you need to say className not just class because class is a constructor function in js
        <div className="saySomething">
            <h3>This is the Say something Component</h3>
            <p>{props.name}</p>
            <p>{props.message}</p>
            <button onClick={sayBye}>Say Good bye</button>
        </div>
    );
}

function tweet({name, message}){

    const tweet = () => {
        console.log("tweet");
    };
    return (
        <div className="SaySomething">
            <h3>{name}</h3>
            <h2>{message}</h2>
    );
}

function OkCheckingTwoFunctionsInOneThing() {
    const seeingIfThisWorks = () => {
        console.log("I am learning cool stuff");
    };

    return (
        <div>
            <button onClick={seeingIfThisWorks}> Learning new stuff</button>
        </div>
    )
};

export default Bye;

// as there can only be one default export per module the other functions or parameters you must export it like below
// read more here: https://www.geeksforgeeks.org/reactjs-importing-exporting/
export {OkCheckingTwoFunctionsInOneThing};
        export {tweet};
