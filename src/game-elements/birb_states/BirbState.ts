import Vector from "../../utils/Vector";

export default interface BirbState {
    /**
     * Render the bird in the current state
     * @param ctx Canvas 2D context
     * @param position position of the bird
     * @param image Image element to render
     */
    render(ctx: CanvasRenderingContext2D, position: Vector, image: HTMLImageElement): void;

    /**
     * Get the source image for the bird's state
     */
    getImageSource(): string;
}