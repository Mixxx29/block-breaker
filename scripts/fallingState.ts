
interface FallingState {
    isFalling(): boolean;

    moveHorizontal(dx: number): void;

    drop(x: number, y: number): void;
}

class Resting implements FallingState {
    isFalling(): boolean { return false; }

    moveHorizontal(dx: number): void {
        player.pushHorizontal(dx);
    }

    drop(x: number, y: number) { }
}

class Falling implements FallingState {
    isFalling(): boolean { return true; }

    moveHorizontal(dx: number): void { }

    drop(x: number, y: number) {
        map.drop(x, y);
    }
}
