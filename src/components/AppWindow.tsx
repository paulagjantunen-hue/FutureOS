import React from "react";

export default function AppWindow({ title, children, onClose }) {
    return (
        <div className="app-window">
            <div className="window-header">
                <span>{title}</span>
                <button onClick={onClose}>✕</button>
            </div>
            <div className="window-body">{children}</div>
        </div>
    );
}