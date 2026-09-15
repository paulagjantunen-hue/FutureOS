import React, { useState } from "react";

export default function Terminal() {
    const [history, setHistory] = useState<string[]>([]);
    const [input, setInput] = useState("");

    const run = () => {
        setHistory([...history, "> " + input]);
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