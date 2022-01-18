import Game from "../Game";
import GameState from "./GameState";

export default class Ending implements GameState {
    private _ctx: CanvasRenderingContext2D;

    public constructor(ctx: CanvasRenderingContext2D, endScore: number) {
        this._ctx = ctx;
        // TODO: do somethin with score?
        // empty
    }

    public processInput(): void {
        // empty
    }

    public update(currentGame: Game): void {
        // empty
    }

    public render(): void {
        // TODO: Show score?
    };
}