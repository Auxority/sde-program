import Vector from "../utils/Vector";
import GameObject from "./GameObject";

export default class Scoreboard extends GameObject {
    private static _scoreboard: Scoreboard;
    private _score: number;

    private constructor(ctx: CanvasRenderingContext2D, position: Vector) {
        super(ctx, position);
        this._score = 0;
    }

    /**
     * Use scoreboard as singleton
     * @param ctx Canvas to render scoreboard to
     * @returns a new or already created scoreboard
     */
    public static getScoreboard(ctx: CanvasRenderingContext2D): Scoreboard {
        if (!this._scoreboard) {
            const position = new Vector(ctx.canvas.width * 0.5, ctx.canvas.height * 0.05)
            this._scoreboard = new Scoreboard(ctx, position);
        }
        return this._scoreboard;
    }

    /**
     * get current score
     */
    public get score(): number {
        return this._score;
    }

    /**
     * reset the score
     */
    public reset(): void {
        this._score = 0;
    }

    /**
     * increase the score by 1
     */
    public increase(): void {
        this._score++;
    }

    public render(): void {
        this.ctx.save();
        this.ctx.font = "48px Mario";
        this.ctx.fillStyle = "#ffffff";
        this.ctx.strokeStyle = "#000000";

        this.ctx.fillText(`${this._score}`, this.position.x, this.position.y);
        this.ctx.strokeText(`${this._score}`, this.position.x, this.position.y);

        this.ctx.restore();
    }
}