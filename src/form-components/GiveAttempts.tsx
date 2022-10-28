import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [numReqAttempts, setNumReqAttempts] = useState<number>(0);

    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Number of attempts: {numAttempts}</span>
            <Form.Group controlId="requestAttempt">
                <Form.Label>
                    Input your requested number of attempts:
                </Form.Label>
                <Form.Control
                    type="number"
                    value={numReqAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setNumReqAttempts(
                            event.target.value === ""
                                ? 0
                                : parseInt(event.target.value)
                        )
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setNumAttempts(numAttempts - 1)}
                disabled={numAttempts === 0}
            >
                use
            </Button>
            <Button
                onClick={() => setNumAttempts(numReqAttempts + numAttempts)}
            >
                gain
            </Button>
        </div>
    );
}
