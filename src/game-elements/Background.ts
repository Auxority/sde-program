import Vector from "../utils/Vector";
import Backgrounds from "./backgrounds/Backgrounds";
import GameObject from "./GameObject";

export default class Background extends GameObject {
    public static readonly BACKGROUND_SPEED = 1.25;
    private _scrollingPictures: Backgrounds[];

    public constructor(ctx: CanvasRenderingContext2D, position: Vector) {
        super(ctx, position);
        this._scrollingPictures = [];
        for (let i = 0; i < 2; i++) {
            this.createNewBackground();
        }
    }

    public render(): void {
        this._scrollingPictures.forEach(background => {
            background.render();
        });
    }

    public update(): void {
        this._scrollingPictures.forEach(background => {
            background.update();
        });
        const currentBackground = this._scrollingPictures[0]
        if (currentBackground.onScreen()) {
            this.createNewBackground();
        }
        if (currentBackground.offScreen()) {
            this._scrollingPictures.shift()
        }
    }

    /**
     * Add new backgrounds
     */
    private createNewBackground(): void {
        const backgroundPosition = new Vector(
            // use beginning position for first background, otherwise add to the back
            this._scrollingPictures.length === 0 ? 0 : this.ctx.canvas.width * 1.9,
            0
        );
        const newPipe = new Backgrounds(
            this.ctx,
            backgroundPosition
        );
        this._scrollingPictures.push(newPipe);
    }
}