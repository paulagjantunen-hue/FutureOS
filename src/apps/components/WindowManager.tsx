import React, { useState } from "react";
import AppWindow from "./AppWindow";

export interface WindowData {
    id: string;
    title: string;
    content: React.ReactNode;
    x: number;
    y: number;
    width: number;
    height: number;
    z: number;
}

interface WindowManagerProps {
    windows: WindowData[];
}

export default function WindowManager({ windows }: WindowManagerProps) {
    const [state, setState] = useState<WindowData[]>(windows);

    const bringToFront = (id: string) => {
        const maxZ = Math.max(...state.map(w => w.z));
        setState(prev =>
            prev.map(w => (w.id === id ? { ...w, z: maxZ + 1 } : w))
        );
    };

    const updateWindow = (id: string, updates: Partial<WindowData>) => {
        setState(prev =>
            prev.map(w => (w.id === id ? { ...w, ...updates } : w))
        );
    };

    return (
        <>
            {state.map(win => (
                <AppWindow
                    key={win.id}
                    {...win}
                    onFocus={() => bringToFront(win.id)}
                    onUpdate={(updates: Partial<WindowData>) =>
                        updateWindow(win.id, updates)
                    }
                >
                    {win.content}
                </AppWindow>
            ))}
        </>
    );
}