import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="formAnswer">
                <Form.Label>Enter your answer!</Form.Label>
                <Form.Control>
                    value={answer}
                    onChange={updateAnswer}
                </Form.Control>
            </Form.Group>
            <h3>Check Answer</h3>
            <div>
                Your answer is {answer === expectedAnswer && <div>✔️</div>}
                {answer !== expectedAnswer && <div>❌</div>}
            </div>
        </div>
    );
}
