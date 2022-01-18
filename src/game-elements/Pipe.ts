import Vector from "../utils/Vector";
import GameObject from "./GameObject";
import * as GameObjects from "./GameObjectExports";
import Pipes from "./pipes/Pipes";

export default class Pipe extends GameObject {
    private _pipes: Pipes[];

    public constructor(ctx: CanvasRenderingContext2D, position: Vector) {
        super(ctx, position)
        this._pipes = [];
        for (let i = 0; i < 10; i++) {
            this.createNewPipe();
        }
    }

    public update(): void {
        this._pipes.forEach((pipe) => this.updatePipe(pipe));
    }

    public render(): void {
        this._pipes.forEach((pipe) => pipe.render());
    }

    /**
     * check if the player hit the pipe closest
     * @param yPositionTop top position of player
     * @param yPositionBottom bottom position of player
     * @returns bool true if hit
     */
    public hasHitPipe(yPositionTop: number, yPositionBottom: number): boolean {
        return this._pipes[0].hasHitPipe(yPositionTop, yPositionBottom);
    }

    /**
     * Run update function for each pipe
     * @param pipe current pipe
     */
    private updatePipe(pipe: Pipes): void {
        pipe.update();
        if (pipe.isGone()) {
            const scoreboard = GameObjects.Scoreboard.getScoreboard(this.ctx);
            scoreboard.increase();
            this.removeOldestPipe();
            this.createNewPipe();
        }
    }

    /**
     * Remove oldest pipe from the list
     */
    private removeOldestPipe(): void {
        this._pipes.shift();
    }

    /**
     * Replace the current pipe for a new one at the back of the line
     */
    private createNewPipe(): void {
        const pipePosition = new Vector(
            this._pipes.length > 0 ? this._pipes[this._pipes.length - 1].getXPosition() + 200 : this.ctx.canvas.width,
            (0.3 + Math.random() * 0.5) * this.ctx.canvas.height
        );
        const newPipe = new Pipes(
            this.ctx,
            pipePosition
        );
        this._pipes.push(newPipe);
    }
}