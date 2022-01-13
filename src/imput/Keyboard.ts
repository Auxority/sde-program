class Keyboard {
    private keyStates: Map<string, boolean>;

    /**
     * Creates the event listener for the keyboard function.
     */
    public constructor() {
        this.keyStates = new Map();
        window.addEventListener("keydown", this.keyDown);
        window.addEventListener("keyup", this.keyUp);
    }

    /**
     * Method that checks if a key is currently pressed.
     * @Param key key codes
     */
    public isKeyDown(key: KeyCodes): boolean {
        return this.keyStates.get(key) !== undefined;
    }

    /**
     * Handles the keydown event and modifies the current keystates.
     * @param ev keyboard event
     */
    private keyDown = (ev: KeyboardEvent): void => {
        if (ev.defaultPrevented) {
            return;
        }
        this.keyStates.set(ev.code, true);
    }

    /**
     * Handles the keyup event and modifies the current keystates.
     * @param ev keyboard event
     */
    private keyUp = (ev: KeyboardEvent): void => {
        if (ev.defaultPrevented) {
            return;
        }
        this.keyStates.delete(ev.code);
    }
}