import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, changeMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        changeMode(event.target.checked);
    }

    const text = name + " is " + (isStudent ? " " : " not ") + "a student";

    const active = (
        <>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    disabled={!editMode}
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setName(event.target.value)
                    }
                />
            </Form.Group>
            <Form.Check
                type="checkbox"
                id="is-student"
                label="Are you a student?"
                disabled={!editMode}
                checked={isStudent}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setIsStudent(event.target.checked)
                }
            />
        </>
    );
    const inactive = <></>;

    return (
        <div>
            <h3>Edit Mode</h3>
            <p>{text}</p>
            <Form.Check
                type="switch"
                id="edit-mode-status"
                label="Edit Mode?"
                checked={editMode}
                onChange={updateMode}
            />
            {editMode ? active : inactive}
        </div>
    );
}
