export default class FrameLimiter {
    private static readonly FPS = 60;

    private _now: number = 0;
    private _then = Date.now();
    private _interval = 1000/FrameLimiter.FPS;
    private _delta: number = 0;

    public withinLimit(): boolean {
        this._now = Date.now();
        this._delta = this._now - this._then;

        if (this._delta > this._interval) {
            this._then = this._now - (this._delta % this._interval);
            return true
        }
        return false
    }
}