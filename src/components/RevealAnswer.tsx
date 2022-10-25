import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [vis, visible] = useState<boolean>(false);

    function change(): void {
        visible(!vis);
    }

    return (
        <div>
            <Button onClick={change}>Reveal Answer</Button>
            {vis && <div>42</div>}
        </div>
    );
}
