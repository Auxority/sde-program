import GameState from "./GameState";

export default class End implements GameState {
    public constructor(ctx: CanvasRenderingContext2D) {
        return;
    }

    public update(): void {
        return;
    }

    public render(): void {
        // TODO: Show score?
    };
}