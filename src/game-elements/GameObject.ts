import Vector from "../utils/Vector";

export default abstract class GameObject {
    private _ctx: CanvasRenderingContext2D;
    private _position: Vector;
    private _velocity: Vector;
    private _acceleration: Vector;

    public constructor(ctx: CanvasRenderingContext2D, position: Vector) {
        this._ctx = ctx;
        this._position = position;
        this._velocity = new Vector(0, 0);
        this._acceleration = new Vector(0, 0);
    }

    /**
     * Run this on every new frame.
     */
    public update(): void {
        this._velocity.add(this._acceleration);
        this._position.add(this._velocity);
        this._acceleration.mul(0);
    }

    /**
     * Render the game object to the canvas.
     * To be implemented by every subclass.
     */
    public abstract render(): void;

    protected get ctx(): CanvasRenderingContext2D {
        return this._ctx;
    }

    protected get position(): Vector {
        return this._position;
    }

    protected get velocity(): Vector {
        return this._velocity;
    }

    protected get acceleration(): Vector {
        return this._acceleration;
    }
}