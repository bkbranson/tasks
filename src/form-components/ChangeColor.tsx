import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red"); // default color

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
        console.log(
            "New color should be " +
                event.target.value +
                ", but it is " +
                { color } +
                "\n"
        );
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="red"
                onChange={updateColor}
                id="red-option"
                label="red"
                value="red"
                checked={color === "red"}
            />
            <Form.Check
                inline
                type="radio"
                name="orange"
                onChange={updateColor}
                id="orange-option"
                label="orange"
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                inline
                type="radio"
                name="yellow"
                onChange={updateColor}
                id="yellow-option"
                label="yellow"
                value="yellow"
                checked={color === "yellow"}
            />
            <Form.Check
                inline
                type="radio"
                name="green"
                onChange={updateColor}
                id="green-option"
                label="green"
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                inline
                type="radio"
                name="blue"
                onChange={updateColor}
                id="blue-option"
                label="blue"
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                name="purple"
                onChange={updateColor}
                id="purple-option"
                label="purple"
                value="purple"
                checked={color === "purple"}
            />
            <Form.Check
                inline
                type="radio"
                name="brown"
                onChange={updateColor}
                id="brown-option"
                label="brown"
                value="brown"
                checked={color === "brown"}
            />
            <Form.Check
                inline
                type="radio"
                name="black"
                onChange={updateColor}
                id="black-option"
                label="black"
                value="black"
                checked={color === "black"}
            />
            <span>You have chosen</span>
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </div>
        </div>
    );
}
