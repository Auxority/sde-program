import Vector from "../../utils/Vector";

export default interface BirbState {
    /**
     * Updates the position, velocity and acceleration of the birb.
     */
    update(position: Vector, velocity: Vector, acceleration: Vector): void;
    /**
     * Render the bird in the current state
     * @param ctx Canvas 2D context
     * @param position position of the bird
     * @param image Image element to render
     */
    render(ctx: CanvasRenderingContext2D, position: Vector): void;
}