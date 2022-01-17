import * as GameObjects from "../game-elements/GameObjectExports";
import Functions from "../utils/Functions";
import Vector from "../utils/Vector";
import GameState from "./GameState";

export default class Running implements GameState {
    private _ctx: CanvasRenderingContext2D;

    private _pipes: GameObjects.Pipe[];
    private _player: GameObjects.Birb;
    private _background: GameObjects.Background;

    public constructor(ctx: CanvasRenderingContext2D) {
        this._background = new GameObjects.Background(ctx, new Vector(0, 0))
        this._pipes = [];
        Array.from({ length: 10 }, (x, i) => {
            this._pipes.push(new GameObjects.Pipe(ctx, new Vector((i / 3 * ctx.canvas.width), Functions.getRandomArbitrary(1, 7))))
        });
        this._player = new GameObjects.Birb(ctx, new Vector(0.1 * ctx.canvas.width, 0.5 * ctx.canvas.height));
        this._ctx = ctx;
    }

    public processInput(): void {
        this._player.processInput();
    }

    public update(): void {
        this._player.update();
        this._pipes.forEach((pipe, index) => {
            pipe.update();
            if (pipe.hasMetPlayer()) {
                this.replacePipe(index)
            }
        });
    }

    public render(): void {
        this._background.render();
        this._player.render();
        this._pipes.forEach((pipe) => pipe.render());
    }

    /**
     * replace the current pipe for a new one at the back of the line
     * @param index current pipe from array as index
     */
    private replacePipe(index: number): void {
        this._pipes.splice(index, 1);
        this._pipes.push(
            new GameObjects.Pipe(this._ctx, new Vector((10 / 3 * this._ctx.canvas.width), Functions.getRandomArbitrary(1, 7)))
        );
    }
}