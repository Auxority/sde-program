import Game from "../Game";
import GameState from "./GameState";
import * as GameObjects from "../game-elements/GameObjectExports";
import { KeyCodes } from "../enums/KeyCodes";
import Keyboard from "../input/Keyboard";

export default class Ending implements GameState {
    private _ctx: CanvasRenderingContext2D;
    private _currentGame: Game;
    private _scoreboard: GameObjects.Scoreboard;
    private _background: GameObjects.Background;
    private _keyboard: Keyboard;

    public constructor(ctx: CanvasRenderingContext2D, currentGame: Game) {
        this._ctx = ctx;
        this._currentGame = currentGame
        this._scoreboard = GameObjects.Scoreboard.getScoreboard(ctx);
        this._background = GameObjects.Background.getBackground(ctx);
        this._keyboard = new Keyboard();
    }

    public processInput(): void {
        // reset the game on enter
        if (this._keyboard.isKeyDown(KeyCodes.Enter)) {
            this._currentGame.start();
        }
    }

    public update(): void {
        // empty
    }

    public render(): void {
        this._background.render();
        this.renderText();
    };

    /**
     * Render the highscore gotten during the round
     */
    private renderText(): void {
        this._ctx.save();
        this._ctx.font = "48px Mario";
        this._ctx.fillStyle = "#ffffff";
        this._ctx.strokeStyle = "#000000";

        const textString = `highscore: ${this._scoreboard.score}`;
        const textWidth = this._ctx.measureText(textString).width;

        const renderInMiddle = (this._ctx.canvas.width / 2) - (textWidth / 2);
        this._ctx.fillText(textString, renderInMiddle, this._ctx.canvas.height/2);
        this._ctx.strokeText(textString, renderInMiddle, this._ctx.canvas.height/2);

        this._ctx.restore();
    }
}