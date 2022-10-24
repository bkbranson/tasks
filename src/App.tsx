import React from "react";
import "./App.css";
<<<<<<< HEAD
import sloth from "../src/sloth.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <h1>Another header</h1>
            </header>
<<<<<<< HEAD
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Brandon was here. Testing this again. P.
                Hello World.
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
            <div style={{ backgroundColor: "red", width: 1600, height: 1000 }}>
                <Container>
                    <Row>
                        <Col>First column.</Col>
                        <Col>Second column.</Col>
                    </Row>
                </Container>
            </div>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
