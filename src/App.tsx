import React, { useState } from "react";
import SystemBar from "./components/SystemBar";
import Launcher from "./components/Launcher";
import AppWindow from "./components/AppWindow";
import Terminal from "./apps/Terminal";
import Notes from "./apps/Notes";

export default function App() {
    const [openApp, setOpenApp] = useState<string | null>(null);

    const apps: Record<string, JSX.Element> = {
        terminal: <Terminal />,
        notes: <Notes />
    };

    return (
        <div className="future-os">
            <SystemBar />
            <Launcher onLaunch={setOpenApp} />

            {openApp && (
                <AppWindow title={openApp} onClose={() => setOpenApp(null)}>
                    {apps[openApp]}
                </AppWindow>
            )}
        </div>
    );
}