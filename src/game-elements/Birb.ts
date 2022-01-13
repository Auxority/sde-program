import GameObject from "./GameObject";
import Functions from "../utils/Functions";
import BirbState from "./birb_states/BirbState";
import { IdleState } from "./birb_states/BirbStateExports";
import Vector from "../utils/Vector";
import Keyboard from "../input/Keyboard";

export default class Birb extends GameObject {
    public static readonly STATE_IMAGE_DIR = "./assets/images/birb_assets/";

    private _image = new Image();
    private _keyboard: Keyboard;
    private _state: BirbState;

    public constructor(ctx: CanvasRenderingContext2D, position: Vector) {
        super(ctx, position);

        this._state = new IdleState();
        this._keyboard = new Keyboard();

        this._image = Functions.createImage(this._state.getImageSource());
    }

    public render(): void {
        this._state.render(this.ctx, this.position, this._image);
    }
}