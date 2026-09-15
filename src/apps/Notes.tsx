import React, { useState } from "react";

export default function Notes() {
    const [text, setText] = useState("");

    return (
        <textarea
            className="notes"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your future plans..."
        />
    );
}