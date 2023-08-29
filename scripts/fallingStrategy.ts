
class FallingStrategy {
    constructor(private falling: FallingState) { }

    update(x: number, y: number) {
        this.falling = map.getBlockOnTopState(x, y + 1);
        this.falling.drop(x, y);
    }

    moveHorizontal(dx: number) {
        this.falling.moveHorizontal(dx);
    }
}