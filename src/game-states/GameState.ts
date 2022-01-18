import Game from "../Game";

export default interface GameState {
    /**
     * Process user input like keyboard and mouse.
     */
    processInput(): void;

    /**
     * update gameobjects' tasks/position
     */
    update(currentGame: Game): void;

    /**
     * Render the game for the current state
     */
    render(): void;
}