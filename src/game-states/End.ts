import GameState from "./GameState";

export default class End implements GameState {
    public constructor(ctx: CanvasRenderingContext2D) {
    }
    
    public update(): void {
        throw new Error("Method not implemented.");
    }

    public render(): void {
        // TODO: Show score?
    };
}