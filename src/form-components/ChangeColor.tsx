import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((clr: string) => (
                <Form.Check
                    key={clr}
                    inline
                    type="radio"
                    name="colors"
                    style={{ backgroundColor: clr }}
                    onChange={updateColor}
                    id="color-option"
                    label={clr}
                    value={clr}
                    checked={color === clr}
                />
            ))}
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                Your chosen color is <p>{color}</p>
            </div>
        </div>
    );
}
