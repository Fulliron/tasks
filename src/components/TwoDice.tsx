import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDieValue, setLeftDieValue] = useState<number>(1);
    const [rightDieValue, setRightDieValue] = useState<number>(4);

    function rollLeft(): void {
        setLeftDieValue(d6());
    }
    function rollRight(): void {
        setRightDieValue(d6());
    }
    function determineMessage(l: number, r: number): JSX.Element {
        if (l === r) {
            if (l === 1) {
                return <p>You Lose</p>;
            } else {
                return <p>You Win!</p>;
            }
        } else {
            return <p>Continue Rolling</p>;
        }
    }
    return (
        <div>
            <span>
                <p data-testid="left-die">{leftDieValue}</p>
                <Button onClick={rollLeft}> Roll Left </Button>
            </span>
            <span>
                <p data-testid="right-die">{rightDieValue}</p>
                <Button onClick={rollRight}> Roll Right </Button>
            </span>
            <div>{determineMessage(leftDieValue, rightDieValue)}</div>
        </div>
    );
}
