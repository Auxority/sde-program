import Resizer from "./Resizer";

export default class Game {
    private _canvas: HTMLCanvasElement;
    private _resizer: Resizer;
    private _ctx: CanvasRenderingContext2D;

    public constructor(canvasId: string) {
        this._canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this._ctx = this._canvas.getContext("2d") as CanvasRenderingContext2D;
        this._resizer = new Resizer(this._canvas);
        this.createStartButton();
    }

    private start(): void {
        this._resizer.enableAutoResize();
    }

    private createStartButton(): void {
        const button = document.createElement("button");
        button.innerText = "Start";
        button.id = "start-button";

        document.body.appendChild(button);

        this.addStartButtonEvent(button);
    }

    private addStartButtonEvent(startButton: HTMLButtonElement) {
        startButton.addEventListener("click", () => this.onStartButtonClicked(startButton));
    }

    private onStartButtonClicked(startButton: HTMLButtonElement): void {
        this.start();
        startButton.remove();
    }
}