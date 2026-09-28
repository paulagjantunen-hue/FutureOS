import WindowManager from "./components/WindowManager";
import Notes from "./apps/Notes";
import Terminal from "./apps/Terminal";

export default function App() {
    const windows = [
        {
            id: "notes",
            title: "Notes",
            content: <Notes />,
            x: 80,
            y: 80,
            width: 300,
            height: 300,
            z: 1
        },
        {
            id: "terminal",
            title: "Terminal",
            content: <Terminal />,
            x: 420,
            y: 120,
            width: 400,
            height: 300,
            z: 2
        }
    ];

    return <WindowManager windows={windows} />;
}