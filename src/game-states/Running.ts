import * as GameObjects from "../game-elements/GameObjectExports";
import Vector from "../utils/Vector";
import GameState from "./GameState";

export default class Running implements GameState {
    private _pipes: GameObjects.Pipe[];
    private _player: GameObjects.Birb;
    private _background: GameObjects.Background;

    public constructor(ctx: CanvasRenderingContext2D) {
        this._background = new GameObjects.Background(ctx, new Vector(0, 0))
        this._pipes = [];
        this._player = new GameObjects.Birb(ctx, new Vector(0.1 * ctx.canvas.width, 0.5 * ctx.canvas.height));
        // this._gameObjects.push();
    }

    public processInput(): void {
        // fill the void
        this._player.processInput();
    }

    public update(): void {
        this._player.update();
    }

    public render(): void {
        // Fill the void
        this._background.render();
        this._player.render();
        this._pipes.forEach((pipe) => pipe.render());
    }
}