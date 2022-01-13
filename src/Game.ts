import Resizer from "./Resizer";

export default class Game {
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _startButton: HTMLButtonElement;
    private _resizer: Resizer;

    public constructor(canvasId: string) {
        this._canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this._ctx = this._canvas.getContext("2d") as CanvasRenderingContext2D;
        this._startButton = this.createStartButton();
        this._resizer = new Resizer(this._canvas);
        this.addStartButtonEvent();
    }

    private start(): void {
        this._startButton.remove();
        this._resizer.enableAutoResize();
    }

    private createStartButton(): HTMLButtonElement {
        const button = document.createElement("button");
        button.innerText = "START";
        button.id = "start-button";
        button.style.width = `${Resizer.INITIAL_CANVAS_SIZE}px`;
        button.style.height = `${Resizer.INITIAL_CANVAS_SIZE * 0.2}px`;

        document.body.appendChild(button);

        return button;
    }

    private addStartButtonEvent(): void {
        this._startButton.addEventListener("click", () => this.start());
    }
}