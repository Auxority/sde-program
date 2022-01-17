import GameObject from "./GameObject";
import BirbState from "./birb_states/BirbState";
import { IdleState, FlyState } from "./birb_states/BirbStateExports";
import Vector from "../utils/Vector";
import Keyboard from "../input/Keyboard";
import { KeyCodes } from "../enums/KeyCodes";
import Game from "../Game";

export default class Birb extends GameObject {
    public static readonly STATE_IMAGE_DIR = "./assets/images/birb_assets";
    private readonly MAX_SPEED = 10;

    private _keyboard: Keyboard;
    private _state: BirbState;
    private _flyDebounce: number;

    public constructor(ctx: CanvasRenderingContext2D, position: Vector) {
        super(ctx, position);

        this._state = new IdleState();
        this._keyboard = new Keyboard();
        this._flyDebounce = 0;
    }

    public processInput(): void {
        // TODO: Move this to the birb states
        if (this._flyDebounce > 0) {
            this._flyDebounce--;
        }
        if (this._keyboard.isKeyDown(KeyCodes.Space)) {
            if (this._flyDebounce === 0) {
                this._flyDebounce = 72;
                this.acceleration.sub(new Vector(0, 8));
            }
        }
    }

    public update(): void {
        this.changeState();
        this._state.update(this.position, this.velocity, this.acceleration);
        this.applyPhysics();
    }

    public render(): void {
        this._state.render(this.ctx, this.position);
    }

    public get size(): Vector {
        return new Vector(
            this._state.getImage().width,
            this._state.getImage().height
        );
    }

    private applyPhysics(): void {
        this.acceleration.sub(Game.GRAVITY);
        this.velocity.add(this.acceleration).limitY(-this.MAX_SPEED, this.MAX_SPEED);
        this.position.add(this.velocity).limitY(-this.size.y * 0.5, this.ctx.canvas.height - this.size.y * 0.5);
        this.acceleration.mul(0);
    }

    private changeState(): void {
        if (this.velocity.y > 0) {
            this._state = new IdleState();
        } else {
            this._state = new FlyState();
        }
    }
}