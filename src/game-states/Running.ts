import * as GameObjects from "../game-elements/GameObjectExports";
import Vector from "../utils/Vector";
import GameState from "./GameState";

export default class Running implements GameState {
    private _ctx: CanvasRenderingContext2D;

    private _background: GameObjects.Background;
    private _player: GameObjects.Birb;
    private _pipes: GameObjects.Pipe;
    private _scoreboard: GameObjects.Scoreboard;

    public constructor(ctx: CanvasRenderingContext2D) {
        this._ctx = ctx;
        this._background = new GameObjects.Background(ctx, new Vector(0, 0))
        this._player = new GameObjects.Birb(ctx, new Vector(0.1 * ctx.canvas.width, 0.5 * ctx.canvas.height));
        this._pipes = new GameObjects.Pipe(ctx, new Vector(0, 0));
        this._scoreboard = GameObjects.Scoreboard.getScoreboard(ctx);
    }

    public processInput(): void {
        this._player.processInput();
    }

    public update(): void {
        this._player.update();
        this._background.update();
        this._pipes.update();
        this._scoreboard.update();
    }

    public render(): void {
        this._background.render();
        this._player.render();
        this._pipes.render();
        this._scoreboard.render();
    }
}