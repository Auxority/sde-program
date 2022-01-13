import StartButton from "./custom-elements/StartButton";
import StartingBirb from "./game-elements/StartingBirb";
import Resizer from "./utils/Resizer";
import Vector from "./utils/Vector";
import * as GameStates from "./game-states/GameStateExports";
import GameState from "./game-states/GameState";
import GameObject from "./game-elements/GameObject";

export default class Game {
    // elements
    private _startButton: StartButton;
    private _gameObjects: GameObject[];
    private _state: GameState;

    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _resizer: Resizer;

    public constructor(canvasId: string) {
        this._canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this._ctx = this._canvas.getContext("2d") as CanvasRenderingContext2D;
        this._resizer = new Resizer(this._canvas);
        this._startButton = new StartButton(this);
        this._gameObjects = [];
        this._gameObjects.push(new StartingBirb(this._ctx, new Vector(0, -8)));

        this._state = new GameStates.Starting();

        requestAnimationFrame(this.loop);
    }

    public start(): void {
        this._gameObjects = [];
        this._resizer.enableAutoResize();
        this._state = new GameStates.Running();
    }

    /**
     * Main game loop
     */
    private loop = (): void => {
        this.clear();
        this.render();

        requestAnimationFrame(this.loop);
    }

    private render(): void {
        this._state.render(this._gameObjects);
    }

    private clear(): void {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
}