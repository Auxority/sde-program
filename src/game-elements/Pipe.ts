import Vector from "../utils/Vector";
import GameObject from "./GameObject";
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
     * Run update function for each pipe
     * @param pipe current pipe
     */
    private updatePipe(pipe: Pipes): void {
        pipe.update();
        if (pipe.isGone()) {
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