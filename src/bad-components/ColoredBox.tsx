import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface colorButtonProps {
    advanceColorIndex: (newIndex: number) => void;
}

interface colorPreviewProp {
    colorIndex: number;
}

function ChangeColor({ advanceColorIndex }: colorButtonProps): JSX.Element {
    return (
        <Button onClick={() => advanceColorIndex(1 % COLORS.length)}>
            Next Color
        </Button>
    );
}

function ColorPreview({ colorIndex }: colorPreviewProp): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex % COLORS.length],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    const advanceIndex = () => setColorIndex(colorIndex + 1);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>
                The current color is: {COLORS[colorIndex % COLORS.length]}
            </span>
            <div>
                <ChangeColor advanceColorIndex={advanceIndex}></ChangeColor>
                <ColorPreview colorIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
