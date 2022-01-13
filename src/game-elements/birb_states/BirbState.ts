import Vector from "../../utils/Vector";

export default interface BirbState {
    render(ctx: CanvasRenderingContext2D, position: Vector, image: HTMLImageElement): void;
    getImageSource(): string;
}