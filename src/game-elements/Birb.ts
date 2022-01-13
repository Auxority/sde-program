import GameObject from "./GameObject";

export default class Birb extends GameObject {
    private _image = new Image();
    // TODO: state pattern? https://refactoring.guru/design-patterns/state/typescript/example
    // TODO: private keyboard events handler

    public constructor(ctx: CanvasRenderingContext2D, position: Vector) {
        super(ctx, position);

        // image based on state
        this._image.src = './assets/images/birb_assets/idle.png';
    }

    public render(): void {
        this.ctx.drawImage(this._image, this.position.x, this.position.y);
    }
}