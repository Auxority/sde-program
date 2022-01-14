import { StartingBirb } from "../game-elements/GameObjectExports";
import Vector from "../utils/Vector";
import GameState from "./GameState";

export default class Starting implements GameState {
    private _startingBirb: StartingBirb;

    public constructor (ctx: CanvasRenderingContext2D) {
        this._startingBirb = new StartingBirb(ctx, new Vector(0, -8))
    }

    public update(): void {
        return;
    }

    public render(): void {
        // Fill the void
        // console.log("Render a starting game.");
        this._startingBirb.render();
    };
}