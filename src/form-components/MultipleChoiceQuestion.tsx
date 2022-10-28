import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="options">
                <Form.Label>Make your guess!</Form.Label>
                <Form.Select
                    value={selected}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                        setSelected(event.target.value)
                    }
                >
                    {options.map((opt: string) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {selected === expectedAnswer ? <div>✔️</div> : <div>❌</div>}
        </div>
    );
}
