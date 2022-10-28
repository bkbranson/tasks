import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inEdit, setEdit] = useState<boolean>(true);
    const [useName, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);
    if (!inEdit) {
        //not in edit mode, render everything
        return (
            <div>
                <h3>Edit Mode</h3>
                <Form.Check
                    type="switch"
                    id="in-edit-mode"
                    label="Edit Mode"
                    checked={inEdit}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setEdit(event.target.checked)
                    }
                />
                <Form.Check
                    type="checkbox"
                    id="is-student"
                    label="Are you a student?"
                    checked={isStudent}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setStudent(event.target.checked)
                    }
                />
                <Form.Group controlId="user-name">
                    <Form.Label>Enter your name!</Form.Label>
                    <Form.Control
                        value={useName}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) =>
                            setName(
                                event.target.value === ""
                                    ? "Your Name"
                                    : event.target.value
                            )
                        }
                    />
                </Form.Group>
                <div>
                    {!inEdit && (
                        <div>
                            {useName} is {!isStudent ? "not" : ""} a student.
                        </div>
                    )}{" "}
                </div>
            </div>
        );
    } else {
        // in edit mode, render only the switch
        return (
            <div>
                <h3>Edit Mode</h3>
                <Form.Check
                    type="switch"
                    id="in-edit-mode"
                    label="Edit Mode"
                    checked={inEdit}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setEdit(event.target.checked)
                    }
                />
                <div>
                    {inEdit && (
                        <div>
                            {useName} is {!isStudent ? "not" : ""} a student.
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
