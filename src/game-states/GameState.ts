export default interface GameState {

    /**
     * update gameobjects' tasks/position
     */
    update(): void;

    /**
     * Render the game for the current state
     */
    render(): void;
}