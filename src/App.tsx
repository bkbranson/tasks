import React from "react";
import "./App.css";
import sloth from "../src/sloth.jpg";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <h1>Another header</h1>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Brandon was here. Testing this again. P.
            </p>
            <ul>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <img src={sloth} alt="Photo of a sloth" />
        </div>
    );
}

export default App;
