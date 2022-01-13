import GameObject from "../game-elements/GameObject";
import GameState from "./GameState";

export default class Running implements GameState {
    public render(gameObjects: GameObject[]): void {
        // Fill the void
        console.log("Render a running game.");
    };
}