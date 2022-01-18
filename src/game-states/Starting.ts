import { StartingBirb } from "../game-elements/GameObjectExports";
import Vector from "../utils/Vector";
import GameState from "./GameState";
import JokesApi from "../api/JokesApi";

export default class Starting implements GameState {
    private _ctx: CanvasRenderingContext2D;
    private _startingBirb: StartingBirb;
    private _randomJoke: string;
    private _loadingJoke: boolean;

    public constructor (ctx: CanvasRenderingContext2D) {
        this._ctx = ctx;
        this._startingBirb = new StartingBirb(ctx, new Vector(0, -25));
        this._loadingJoke = false;
        this._randomJoke = "";
    }

    public processInput(): void {
        // empty
    }

    public async update(): Promise<void> {
        if (!this._loadingJoke) {
            this._loadingJoke = true;
            this._randomJoke = await JokesApi.getRandomJoke();
        }
    }

    public render(): void {
        this.renderJoke();
        this._startingBirb.render();
    };

    /**
     * Render the joke to the canvas
     */
    private renderJoke(): void {
        if (this._randomJoke) {
            this._ctx.save();
            this._ctx.textAlign = "center";
            this._ctx.fillStyle = "#ffffff";
            this._ctx.font = "12px Comic Sans"
            const lines = this.getLines();
            for (let i = lines.length - 1; i >= 0; i--) {
                const line = lines[lines.length - 1 - i];
                this._ctx.fillText(line, this._ctx.canvas.width * 0.5, this._ctx.canvas.height * 0.95 - i * 14);
            }
            this._ctx.restore();
        }
    }

    /**
     * Returns a random joke with check if it fits in canvas otherwise new line
     * @returns the joke in multiple parts if needed
     */
    private getLines(): string[] {
        const maxWidth = this._ctx.canvas.width * 0.96;
        const words = this._randomJoke.split(" ");
        const lines = [];
        let currentLine = words[0];
        for (let i = 1; i < words.length; i++) {
            const word = words[i];
            const width = this._ctx.measureText(currentLine + " " + word).width;
            if (width < maxWidth) {
                currentLine += " " + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        return lines;
    }
}