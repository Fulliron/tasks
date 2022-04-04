import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [quizState, setQuizState] = useState<boolean>(false);
    const [numAttempts, setNumAttempts] = useState<number>(4);

    function startQuiz(): void {
        if (quizState === false) {
            setQuizState(true);
            setNumAttempts(numAttempts - 1);
        }
    }
    function stopQuiz(): void {
        setQuizState(false);
    }
    function mulligan(): void {
        setNumAttempts(numAttempts + 1);
    }
    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={quizState || numAttempts <= 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!quizState}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={quizState}>
                Mulligan
            </Button>
            <div>Attempts: {numAttempts}</div>
        </div>
    );
}
