import React from "react";

type LauncherProps = {
    onLaunch: (app: string) => void;
};

export default function Launcher({ onLaunch }: LauncherProps) {
    return (
        <div className="launcher">
            <button onClick={() => onLaunch("terminal")}>Terminal</button>
            <button onClick={() => onLaunch("notes")}>Notes</button>
        </div>
    );
}