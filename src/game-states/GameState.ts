import GameObject from "../game-elements/GameObject";

export default interface GameState {
    render(gameObjects: GameObject[]): void;
}