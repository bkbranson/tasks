import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, modAttempts] = useState<number>(4);
    const [inProg, takingQuiz] = useState<boolean>(false);

    function progress(): void {
        takingQuiz(!inProg);
    }

    function increaseCounter(): void {
        modAttempts(attempts + 1);
    }

    function decreaseCounter(): void {
        modAttempts(attempts - 1);
        progress();
    }

    return (
        <div>
            <span>Attempts: {attempts}</span>
            <Button
                onClick={decreaseCounter}
                disabled={inProg || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={progress} disabled={!inProg}>
                Stop Quiz
            </Button>
            <Button onClick={increaseCounter} disabled={inProg}>
                Mulligan
            </Button>
        </div>
    );
}
