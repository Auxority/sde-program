import Vector from "../../utils/Vector";

export default interface BirbState {
    /**
     * Render the bird in the current state
     * @param ctx Canvas 2D context
     * @param position position of the bird
     * @param image Image element to render
     */
    render(ctx: CanvasRenderingContext2D, position: Vector): void;
    /**
     * Gets the image that the birb state uses.
     */
    getImage(): HTMLImageElement;
}