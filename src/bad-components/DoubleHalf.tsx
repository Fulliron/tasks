import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface MathButtonProps {
    setValue: (num: number) => void;
}

function Doubler({ setValue }: MathButtonProps): JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue(2);
            }}
        >
            {" "}
            Double{" "}
        </Button>
    );
}

function Halver({ setValue }: MathButtonProps): JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue(0.5);
            }}
        >
            {" "}
            Halve{" "}
        </Button>
    );
}

export function DoubleHalf(): JSX.Element {
    const [value, setValue] = useState<number>(10);
    const doubler = () => setValue(value * 2);
    const halver = () => setValue(value * 0.5);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Doubler setValue={doubler}></Doubler>
            <Halver setValue={halver}></Halver>
        </div>
    );
}
