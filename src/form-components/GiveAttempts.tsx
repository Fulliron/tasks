import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, changeAttempts] = useState<number>(3);
    const [attemptsRequested, increaseAttempts] = useState<number>(0);
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {numAttempts}</p>
            <Form.Group controlId="attemptsRequested">
                <Form.Label>Request more Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        increaseAttempts(
                            !isNaN(parseInt(event.target.value))
                                ? parseInt(event.target.value)
                                : 0
                        )
                    }
                />
            </Form.Group>
            <Button
                onClick={() => changeAttempts(numAttempts + attemptsRequested)}
            >
                gain
            </Button>
            <Button
                onClick={() => changeAttempts(numAttempts - 1)}
                disabled={numAttempts <= 0}
            >
                use
            </Button>
        </div>
    );
}
