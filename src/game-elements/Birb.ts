import GameObject from "./GameObject";
import BirbState from "./birb_states/BirbState";
import { IdleState, FlyState } from "./birb_states/BirbStateExports";
import Vector from "../utils/Vector";
import Keyboard from "../input/Keyboard";
import { KeyCodes } from "../enums/KeyCodes";
import Game from "../Game";

export default class Birb extends GameObject {
    public static readonly STATE_IMAGE_DIR = "./assets/images/birb_assets";

    private _keyboard: Keyboard;
    private _state: BirbState;

    public constructor(ctx: CanvasRenderingContext2D, position: Vector) {
        super(ctx, position);

        this._state = new IdleState();
        this._keyboard = new Keyboard();
    }

    public update(): void {
        if (this._keyboard.isKeyDown(KeyCodes.Space)) {
            this.changeState(new FlyState());
        } else {
            this.changeState(new IdleState());
        }
        this.acceleration.sub(Game.GRAVITY);
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mul(0);
    }

    public render(): void {
        this._state.render(this.ctx, this.position);
    }

    private changeState(state: BirbState): void {
        if (this._state !== state) {
            this._state = state
        }
    }
}