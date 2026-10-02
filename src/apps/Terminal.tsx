import React, { useState } from "react";

import { executeCommand } from "../filesystem/commands";

export default function Terminal() {
    const [history, setHistory] = useState<string[]>([]);
    const [input, setInput] = useState("");

    const run = () => {
        const result = executeCommand(input);

        setHistory(prev => [
            ...prev,
            "> " + input,
            result
        ]);

        setInput("");
    };

    return (
        <div className="terminal">
            {history.map((line, i) => (
                <div key={i}>{line}</div>
            ))}
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && run()}
            />
        </div>
    );
}