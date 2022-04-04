import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
            </header>
<<<<<<< HEAD
            <Container>
                <Row>
                    <Col>
                        <div className="App-col-box">
                            <img
                                className="App-image-me"
                                src="https://i.imgur.com/X39E2WM.png"
                                alt="Some art of myself, drawn by my fiance."
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className="App-col-box">
                            <p>My Name is Charlotte Liston. Hello World!</p>
                            <ul>
                                <li>
                                    I am a senior Cognitive Science major at UD
                                </li>
                                <li>I am a trans woman</li>
                                <li>I am engaged</li>
                            </ul>
                            <p>
                                Edit <code>src/App.tsx</code> and save. This
                                page will automatically reload.
                            </p>
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
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
