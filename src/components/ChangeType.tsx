import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [quizState, setState] = useState<QuestionType>(
        "short_answer_question"
    );

    function flipState(): void {
        if (quizState === "short_answer_question") {
            setState("multiple_choice_question");
        } else {
            setState("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={flipState}>Change Type</Button>
            {quizState === "short_answer_question" ? (
                <p>Short Answer</p>
            ) : (
                <p>Multiple Choice</p>
            )}
        </div>
    );
}
