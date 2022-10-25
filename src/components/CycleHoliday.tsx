import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    // Christmas🎁 Halloween🎃 New Years Eve🎄Thanksgiving🦃 Valentines Day💖 ALPHABETICAL
    // Valentine's💖 Halloween🎃 Thanksgiving🦃 Christmas🎁 New Years Eve🎄 DATE
    const [holiday, changeHoliday] = useState<string>("🎁"); // check
    function nextHolA(): void {
        if (holiday === "🎁") {
            changeHoliday("🎃");
        } else if (holiday === "🎃") {
            changeHoliday("🎄");
        } else if (holiday === "🎄") {
            changeHoliday("🦃");
        } else if (holiday === "🦃") {
            changeHoliday("💖");
        } else {
            changeHoliday("🎁");
        }
    }

    function nextHolD(): void {
        if (holiday === "💖") {
            changeHoliday("🎃");
        } else if (holiday === "🎃") {
            changeHoliday("🦃");
        } else if (holiday === "🦃") {
            changeHoliday("🎁");
        } else if (holiday === "🎁") {
            changeHoliday("🎄");
        } else {
            changeHoliday("💖");
        }
    }
    return (
        <div>
            <span>Holiday: {holiday}</span>
            <Button onClick={nextHolA}>Advance by Alphabet</Button>
            <Button onClick={nextHolD}>Advance by Year</Button>
        </div>
    );
}
