import GameObject from "../game-elements/GameObject";
import GameState from "./GameState";

export default class Starting implements GameState {
    public render(gameObjects: GameObject[]): void {
        // Fill the void
        // console.log("Render a starting game.");
        gameObjects.forEach((gameObject) => gameObject.render());
    };
}