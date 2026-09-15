import React from "react";

type AppWindowProps = {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
};

export default function AppWindow({ title, children, onClose }: AppWindowProps) {
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