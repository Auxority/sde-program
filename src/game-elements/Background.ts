import Vector from "../utils/Vector";
import BackgroundColors from "./background_colors/BackgroundColors";
import GameObject from "./GameObject";

export default class Background extends GameObject {
    public static readonly BACKGROUND_SPEED = 1.25;
    private _backgroundColors: BackgroundColors[];

    public constructor(ctx: CanvasRenderingContext2D, position: Vector) {
        super(ctx, position);
        this._backgroundColors = [];
        for (let i = 0; i < 2; i++) {
            this.createNewBackground();
        }
    }

    public render(): void {
        this._backgroundColors.forEach(background => {
            background.render();
        });
    }

    public update(): void {
        this._backgroundColors.forEach(background => {
            background.update();
        });
        const currentBackground = this._backgroundColors[0]
        if (currentBackground.onScreen()) {
            this.createNewBackground();
        }
        if (currentBackground.offScreen()) {
            this._backgroundColors.shift()
        }
    }

    /**
     * Add new backgrounds
     */
     private createNewBackground(): void {
        const backgroundPosition = new Vector(
            this._backgroundColors.length === 0 ? 0 : this.ctx.canvas.width*2, 0
        );
        const newPipe = new BackgroundColors(
            this.ctx,
            backgroundPosition
        );
        this._backgroundColors.push(newPipe);
    }
}