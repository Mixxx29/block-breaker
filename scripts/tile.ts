
interface Tile {
    draw(g: CanvasRenderingContext2D, x: number, y: number): void;
    moveHorizontal(dx: number): void;
    moveVertical(dy: number): void;
    update(x: number, y:number): void;

    isAir(): boolean;

    doesFit(keyConfiguration: KeyConfiguration): boolean;
    getBlockOnTopState(): FallingState;
}

class Air implements Tile {
    draw(g: CanvasRenderingContext2D): void { }
    moveHorizontal(dx: number): void {
        player.move(dx, 0);
    }
    moveVertical(dy: number) {
        player.move(0, dy);
    }
    update(x: number, y: number) { }

    isAir(): boolean { return true; }

    doesFit(keyConfiguration: KeyConfiguration): boolean { return false; }
    getBlockOnTopState(): FallingState { return new Falling(); }
}

class Flux implements Tile {
    draw(g: CanvasRenderingContext2D, x: number, y: number): void {
        g.fillStyle = "#ccffcc";
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
    moveHorizontal(dx: number): void {
        player.move(dx, 0);
    }
    moveVertical(dy: number) {
        player.move(0, dy);
    }
    update(x: number, y: number) { }

    isAir(): boolean { return false; }

    doesFit(keyConfiguration: KeyConfiguration): boolean { return false; }
    getBlockOnTopState(): FallingState { return new Resting(); }
}

class Unbreakable implements Tile {
    draw(g: CanvasRenderingContext2D, x: number, y: number): void {
        g.fillStyle = "#999999";
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
    moveHorizontal(dx: number): void { }
    moveVertical(dy: number): void { }
    update(x: number, y: number) { }

    isAir(): boolean { return false; }

    doesFit(keyConfiguration: KeyConfiguration): boolean { return false; }
    getBlockOnTopState(): FallingState { return new Resting(); }
}

class PlayerTile implements Tile {
    draw(g: CanvasRenderingContext2D, x: number, y: number): void { }
    moveHorizontal(dx: number): void { }
    moveVertical(dy: number): void { }
    update(x: number, y: number) { }

    isAir(): boolean { return false; }

    doesFit(keyConfiguration: KeyConfiguration): boolean { return false; }
    getBlockOnTopState(): FallingState { return new Resting(); }
}

class Stone implements Tile {
    private fallingStrategy: FallingStrategy;

    constructor(falling: FallingState) {
        this.fallingStrategy = new FallingStrategy(falling);
    }

    draw(g: CanvasRenderingContext2D, x: number, y: number): void {
        g.fillStyle = "#0000cc";
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
    moveHorizontal(dx: number): void {
        this.fallingStrategy.moveHorizontal(dx);
    }
    moveVertical(dy: number): void { }
    update(x: number, y: number): void {
        this.fallingStrategy.update(x, y);
    }

    isAir(): boolean { return false; }

    doesFit(keyConfiguration: KeyConfiguration): boolean { return false; }
    getBlockOnTopState(): FallingState { return new Resting(); }
}

class Box implements Tile {
    private fallingStrategy: FallingStrategy;

    constructor(falling: FallingState) {
        this.fallingStrategy = new FallingStrategy(falling);
    }

    draw(g: CanvasRenderingContext2D, x: number, y: number): void {
        g.fillStyle = "#8b4513";
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
    moveHorizontal(dx: number): void {
        this.fallingStrategy.moveHorizontal(dx);
    }
    moveVertical(dy: number): void { }
    update(x: number, y: number) {
        this.fallingStrategy.update(x, y);
    }

    isAir(): boolean { return false; }

    doesFit(keyConfiguration: KeyConfiguration): boolean { return false; }
    getBlockOnTopState(): FallingState { return new Resting(); }
}

class MyKey implements Tile {
    constructor(private keyConfiguration: KeyConfiguration) {}

    draw(g: CanvasRenderingContext2D, x: number, y: number): void {
        this.keyConfiguration.setColor(g);
        g.beginPath();
        g.arc(
            x * TILE_SIZE + TILE_SIZE / 2,
            y * TILE_SIZE + TILE_SIZE / 2,
            TILE_SIZE / 2,
            0,
            2 * Math.PI,
            false
        );
        g.fill();
    }
    moveHorizontal(dx: number): void {
        this.keyConfiguration.removeLock();
        player.move(dx, 0)
    }
    moveVertical(dy: number): void {
        this.keyConfiguration.removeLock();
        player.move(0, dy)
    }
    update(x: number, y: number) { }

    isAir(): boolean { return false; }

    doesFit(keyConfiguration: KeyConfiguration): boolean {
        return this.keyConfiguration.doesFIt(keyConfiguration);
    }
    getBlockOnTopState(): FallingState { return new Resting(); }
}

class MyLock implements Tile {
    constructor(private keyConfiguration: KeyConfiguration) {}

    draw(g: CanvasRenderingContext2D, x: number, y: number): void {
        this.keyConfiguration.setColor(g);
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
    moveHorizontal(dx: number) { }
    moveVertical(dy: number) { }
    update(x: number, y: number) { }

    isAir(): boolean { return false; }

    doesFit(keyConfiguration: KeyConfiguration): boolean {
        return this.keyConfiguration.doesFIt(keyConfiguration);
    }
    getBlockOnTopState(): FallingState { return new Resting(); }
}