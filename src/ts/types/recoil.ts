export enum StateKeys {
    CharCount = "charCount",
    Debug = "debug",
    DebugComponents = "debugComponents",
    DebugLogging = "debugLogging",
    Text = "text",
}

export type DebugStateType = {
    displayDebugComponents: boolean;
    enableLogging: boolean;
};
