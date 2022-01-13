import GameObject from "../game-elements/GameObject";

export default interface GameState {
    /**
     * Render the game for the current state
     * @param gameObjects a array of all objects to render
     */
    render(): void;
}