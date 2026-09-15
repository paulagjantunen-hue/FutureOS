import React from "react";
import Clock from "./Clock";

export default function SystemBar() {
    return (
        <div className="system-bar">
            <div className="logo">FutureOS</div>
            <Clock />
        </div>
    );
}