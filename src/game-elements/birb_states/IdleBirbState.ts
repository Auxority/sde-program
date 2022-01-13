import Vector from "../../utils/Vector";
import State from "./BirbState";

export default class IdleState implements State {
    public render(ctx: CanvasRenderingContext2D, position: Vector, image: HTMLImageElement): void {
        // Empty filler
        ctx.drawImage(image, position.x, position.y);
    }

    public getImageSource(): string {
        return "./assets/images/birb_assets/idle.png";
    }
}