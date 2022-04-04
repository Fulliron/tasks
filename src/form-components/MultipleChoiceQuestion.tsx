import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, inputAnswer] = useState<string>(options[0]);
    const expectedAns = expectedAnswer;

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        inputAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="MCAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Select value={userAnswer} onChange={updateAnswer}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <p>{userAnswer === expectedAns ? "✔️" : "❌"}</p>
        </div>
    );
}
