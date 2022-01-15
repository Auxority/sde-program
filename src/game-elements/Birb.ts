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
    private _flyDebounce: number;
    private _flying: boolean;

    public constructor(ctx: CanvasRenderingContext2D, position: Vector) {
        super(ctx, position);

        this._state = new IdleState();
        this._keyboard = new Keyboard();
        this._flyDebounce = 0;
        this._flying = false;
    }

    public processInput(): void {
        if (this._flyDebounce > 0) {
            this._flyDebounce--;
            this._flying = false;
        }
        if (this._keyboard.isKeyDown(KeyCodes.Space)) {
            if (this._flyDebounce === 0) {
                this._flyDebounce = 30;
                this.acceleration.sub(new Vector(0, 3));
            }
        }
    }

    public update(): void {
        if (this.velocity.y > 0) {
            this.changeState(new IdleState());
        } else {
            this.changeState(new FlyState());
        }
        this._state.update(this.position, this.velocity, this.acceleration);
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