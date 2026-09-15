import React from "react";

export default function Launcher({ onLaunch }) {
    return (
        <div className="launcher">
            <button onClick={() => onLaunch("terminal")}>Terminal</button>
            <button onClick={() => onLaunch("notes")}>Notes</button>
        </div>
    );
}