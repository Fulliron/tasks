import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import {
    duplicateQuestion,
    makeBlankQuestion,
    renameQuestion
} from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((quest: Question): boolean => quest.published);
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const notEmpties = deepCopy(questions).filter(isNotEmpty);
    return notEmpties;
}

function isNotEmpty(question: Question): boolean {
    return question.body !== question.expected || question.options.length > 0;
}

function deepCopy(questions: Question[]): Question[] {
    return questions.map(
        (quest: Question): Question => ({
            ...quest,
            options: [...quest.options],
            type: quest.type
        })
    );
}
/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const copy = deepCopy(questions);
    const filteredCopy = copy.filter(
        (quest: Question): boolean => quest.id === id
    );
    if (filteredCopy.length >= 1) {
        return [...filteredCopy][0];
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const copy = deepCopy(questions);
    const filteredCopy = copy.filter(
        (quest: Question): boolean => quest.id !== id
    );
    return filteredCopy;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const names = deepCopy(questions).reduce(
        (jiaomen: string[], name: Question) => [...jiaomen, name.name],
        []
    );
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const points = deepCopy(questions).reduce(
        (pts: number, question: Question) => pts + question.points,
        0
    );
    return points;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const published = deepCopy(questions).filter(
        (quest: Question): boolean => quest.published === true
    );
    return sumPoints(published);
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const csv = deepCopy(questions).reduce(
        (currCSV: string, question: Question) =>
            currCSV +
            "\n" +
            question.id +
            "," +
            question.name +
            "," +
            question.options.length +
            "," +
            question.points +
            "," +
            question.published,
        "id,name,options,points,published"
    );
    return csv;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return deepCopy(questions).reduce(
        (answers: Answer[], question: Question) => [
            ...answers,
            {
                questionId: question.id,
                text: "",
                submitted: false,
                correct: false
            }
        ],
        []
    );
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map(
        (quest: Question): Question => ({
            ...quest,
            options: [...quest.options],
            type: quest.type,
            published: true
        })
    );
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    return (
        deepCopy(questions).filter(
            (quest: Question): boolean => quest.type === questions[0].type
        ).length === questions.length
    );
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQuestions = [
        ...questions.map(
            (quest: Question): Question => ({
                ...quest,
                options: [...quest.options],
                type: quest.type
            })
        ),
        makeBlankQuestion(id, name, type)
    ];
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const copy = deepCopy(questions);
    copy.splice(
        locateQuestionByID(targetId, copy),
        1,
        renameQuestion(copy[locateQuestionByID(targetId, copy)], newName)
    );

    return copy;
}

function locateQuestionByID(targetId: number, questions: Question[]): number {
    return deepCopy(questions).findIndex(
        (quest: Question) => quest.id === targetId
    );
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const copy = deepCopy(questions);
    let editedOptions: string[] = [];
    const index = locateQuestionByID(targetId, copy);
    if (newQuestionType === "multiple_choice_question") {
        editedOptions = copy[index].options;
    }
    copy.splice(index, 1, {
        ...copy[index],
        type: newQuestionType,
        options: editedOptions
    });
    return copy;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const copy = deepCopy(questions);
    const index = locateQuestionByID(targetId, copy);
    let editedOptions = copy[index].options;
    if (targetOptionIndex === -1) {
        editedOptions = [...editedOptions, newOption];
    } else {
        editedOptions.splice(targetOptionIndex, 1, newOption);
    }
    copy.splice(index, 1, {
        ...copy[index],
        options: editedOptions
    });
    return copy;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const copy = deepCopy(questions);
    const index = locateQuestionByID(targetId, copy);
    copy.splice(index + 1, 0, duplicateQuestion(newId, { ...copy[index] }));
    return copy;
}
