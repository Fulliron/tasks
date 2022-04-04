import React, { useState } from "react";
import { Button } from "react-bootstrap";
type Holiday = "🐰" | "🎃" | "🎆" | "🎄" | "🏮";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🐰");

    function cycleHolidayAlphabetically(): void {
        if (holiday === "🐰") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🎆");
        } else if (holiday === "🎆") {
            setHoliday("🏮");
        } else if (holiday === "🏮") {
            setHoliday("🎄");
        } else {
            setHoliday("🐰");
        }
    }

    function cycleHolidayChronologically(): void {
        if (holiday === "🐰") {
            setHoliday("🎆");
        } else if (holiday === "🎆") {
            setHoliday("🏮");
        } else if (holiday === "🏮") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🎄");
        } else {
            setHoliday("🐰");
        }
    }

    return (
        <div>
            <p>Holiday: {holiday}</p>
            <Button onClick={cycleHolidayChronologically}>
                {" "}
                Cycle over the year{" "}
            </Button>
            <Button onClick={cycleHolidayAlphabetically}>
                {" "}
                Cycle Alphabetically{" "}
            </Button>
        </div>
    );
}
