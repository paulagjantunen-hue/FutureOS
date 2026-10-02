import { fileSystem } from "./fileSystem";

export function executeCommand(input: string): string {
    const parts = input.trim().split(" ");

    switch (parts[0]) {
        case "ls":
            return Object.keys(fileSystem).join("\n");

        case "cat":
            if (!parts[1]) {
                return "Usage: cat <file>";
            }

            return (
                fileSystem[parts[1] as keyof typeof fileSystem] ??
                `cat: ${parts[1]}: No such file`
            );

        default:
            return `Command not found: ${parts[0]}`;
    }
}