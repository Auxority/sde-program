import { Pipe, Birb } from "../game-elements/GameObjectExports";
import Vector from "../utils/Vector";
import GameState from "./GameState";

export default class Running implements GameState {
    private _pipes: Pipe[];
    private _player: Birb;

    public constructor(ctx: CanvasRenderingContext2D) {
        this._pipes = [];
        this._player = new Birb(ctx, new Vector(0, 0));
        // this._gameObjects.push();
    }

    public update(): void {
        this._player.update();
    }

    public render(): void {
        // Fill the void
        console.log("Render a running game.");
        this._player.render();
        this._pipes.forEach((pipe) => pipe.render());
    };
}