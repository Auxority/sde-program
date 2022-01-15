/**
 * Maybe convert this to an abstract class called GameScene and extend it into the subclasses?
 */

export default interface GameState {
    /**
     * Process user input like keyboard and mouse.
     */
    processInput(): void;

    /**
     * update gameobjects' tasks/position
     */
    update(): void;

    /**
     * Render the game for the current state
     */
    render(): void;
}