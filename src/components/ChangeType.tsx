import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [qt, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    function swap(): void {
        setQuestionType(
            qt === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    function isShort(): string {
        return qt === "short_answer_question"
            ? "Short Answer"
            : "Multiple Choice";
    }

    return (
        <div>
            <Button onClick={swap}>Change Type </Button>
            <span>{isShort()}</span>
        </div>
    );
}
