import * as GameObjects from "../game-elements/GameObjectExports";
import Functions from "../utils/Functions";
import Vector from "../utils/Vector";
import GameState from "./GameState";

export default class Running implements GameState {
    private _ctx: CanvasRenderingContext2D;

    private _background: GameObjects.Background;
    private _player: GameObjects.Birb;
    private _pipes: GameObjects.Pipe[];

    public constructor(ctx: CanvasRenderingContext2D) {
        this._ctx = ctx;
        this._background = new GameObjects.Background(ctx, new Vector(0, 0))
        this._player = new GameObjects.Birb(ctx, new Vector(0.1 * ctx.canvas.width, 0.5 * ctx.canvas.height));
        this._pipes = [];
        for (let i = 0; i < 10; i++) {
            this.createNewPipe();
        }
    }

    public processInput(): void {
        this._player.processInput();
    }

    public update(): void {
        this._player.update();
        this._background.update();
        this._pipes.forEach((pipe) => this.updatePipe(pipe));
    }

    public render(): void {
        this._background.render();
        this._player.render();
        this._pipes.forEach((pipe) => pipe.render());
    }

    private updatePipe(pipe: GameObjects.Pipe): void {
        pipe.update();
        if (pipe.isGone()) {
            this.removeOldestPipe();
            this.createNewPipe();
        }
    }

    private removeOldestPipe(): void {
        this._pipes.shift();
    }

    /**
     * Replace the current pipe for a new one at the back of the line
     */
    private createNewPipe(): void {
        const pipePosition = new Vector(
            this._pipes.length > 0 ? this._pipes[this._pipes.length - 1].getXPosition() + 200 : this._ctx.canvas.width,
            (0.3 + Math.random() * 0.5) * this._ctx.canvas.height
        );
        const newPipe = new GameObjects.Pipe(
            this._ctx,
            pipePosition
        );
        this._pipes.push(newPipe);
    }
}