import Game from "../Game";
import GameState from "./GameState";
import * as GameObjects from "../game-elements/GameObjectExports";
import Vector from "../utils/Vector";

export default class Ending implements GameState {
    private _ctx: CanvasRenderingContext2D;
    private _endScore: number;

    private _background: GameObjects.Background;

    public constructor(ctx: CanvasRenderingContext2D, endScore: number) {
        this._ctx = ctx;
        this._endScore = endScore;
        this._background = new GameObjects.Background(ctx, new Vector(0, 0));
    }

    public processInput(): void {
        // empty
    }

    public update(currentGame: Game): void {
        // empty
    }

    public render(): void {
        this._background.render();

        this._ctx.save();
        this._ctx.font = "48px Mario";
        this._ctx.fillStyle = "#ffffff";
        this._ctx.strokeStyle = "#000000";

        const textString = `Highscore: ${this._endScore}`
        const textWidth = this._ctx.measureText(textString).width;

        const renderInMiddle = (this._ctx.canvas.width/2) - (textWidth / 2)
        this._ctx.fillText(textString, renderInMiddle, this._ctx.canvas.height/2);
        this._ctx.strokeText(textString, renderInMiddle, this._ctx.canvas.height/2);

        this._ctx.restore();
    };
}