import Vector from "../utils/Vector";

export default abstract class GameObject {
    private _ctx: CanvasRenderingContext2D;
    private _position: Vector;
    private _velocity: Vector;

    public constructor(ctx: CanvasRenderingContext2D, position: Vector) {
        this._ctx = ctx;
        this._position = position;
        this._velocity = new Vector(0, 0);
    }

    /**
     * Run this on every new frame.
     */
    public abstract update(): void;

    // public update(): void {
    //     this._position.add(this._velocity);
    // }

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
}