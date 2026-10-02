import React, { useRef } from "react";
import "./AppWindow.css";

interface AppWindowProps {
    title: string;
    children: React.ReactNode;
    x: number;
    y: number;
    width: number;
    height: number;
    z: number;
    onFocus: () => void;
    onUpdate: (updates: Partial<AppWindowProps>) => void;
}

export default function AppWindow({
    title,
    children,
    x,
    y,
    width,
    height,
    z,
    onFocus,
    onUpdate,
}: AppWindowProps) {
    const windowRef = useRef<HTMLDivElement>(null);

    const startDrag = (e: React.MouseEvent) => {
        onFocus();

        const startX = e.clientX;
        const startY = e.clientY;

        const move = (ev: MouseEvent) => {
            const dx = ev.clientX - startX;
            const dy = ev.clientY - startY;
            onUpdate({ x: x + dx, y: y + dy });
        };

        const stop = () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseup", stop);
        };

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", stop);
    };

    const startResize = (e: React.MouseEvent) => {
        onFocus();

        const startX = e.clientX;
        const startY = e.clientY;

        const move = (ev: MouseEvent) => {
            const dx = ev.clientX - startX;
            const dy = ev.clientY - startY;
            onUpdate({ width: width + dx, height: height + dy });
        };

        const stop = () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseup", stop);
        };

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", stop);
    };

    return (
        <div
            ref={windowRef}
            className="app-window"
            style={{
                left: x,
                top: y,
                width,
                height,
                zIndex: z
            }}
            onMouseDown={onFocus}
        >
            <div className="title-bar" onMouseDown={startDrag}>
                {title}
            </div>

            <div className="window-content">{children}</div>

            <div className="resize-handle" onMouseDown={startResize} />
        </div>
    );
}