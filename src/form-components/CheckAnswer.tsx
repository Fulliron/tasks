import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, inputAnswer] = useState<string>("");
    const expectedAns = expectedAnswer;

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        inputAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formUserAnswer">
                <Form.Label>Answer: </Form.Label>
                <Form.Control value={userAnswer} onChange={updateAnswer} />
            </Form.Group>
            <p>{userAnswer === expectedAns ? "✔️" : "❌"}</p>
        </div>
    );
}
