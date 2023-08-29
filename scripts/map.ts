
class Map {
    private readonly map: Tile[][];

    constructor(raw: number[][]) {
        this.map = new Array(raw.length);
        for (let y = 0; y < raw.length; y++) {
            this.map[y] = new Array(raw[y].length);
            for (let x = 0; x < raw[y].length; x++) {
                this.map[y][x] = RAW_TILES[raw[y][x]].transform();
            }
        }
    }

    update(): void {
        for (let y = this.map.length - 1; y >= 0; y--) {
            for (let x = 0; x < this.map[y].length; x++) {
                this.map[y][x].update(x, y);
            }
        }
    }
    draw(g: CanvasRenderingContext2D): void {
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                this.map[y][x].draw(g, x, y);
            }
        }
    }

    drop(x: number, y: number) {
        this.map[y + 1][x] = this.map[y][x];
        this.map[y][x] = new Air();
    }

    getBlockOnTopState(x: number, y: number): FallingState {
        return this.map[y][x].getBlockOnTopState();
    }

    remove(shouldRemove: RemoveStrategy) {
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                if (shouldRemove.check(x, y)) {
                    this.map[y][x] = new Air();
                }
            }
        }
    }

    moveHorizontal(x: number, y: number, dx: number): void {
        this.map[y][x + dx].moveHorizontal(dx);
    }

    moveVertical(x: number, y: number, dy: number): void {
        this.map[y + dy][x].moveVertical(dy);
    }

    pushHorizontal(x: number, y: number, dx: number): void {
        if (this.map[y][x + dx + dx].isAir() && !this.map[y + 1][x + dx].isAir()) {
            this.map[y][x + dx + dx] = this.map[y][x + dx];
            player.move(dx, 0);
        }
    }

    movePlayer(x: number, y: number, newX: number, newY: number) {
        this.map[y][x] = new Air();
        this.map[newY][newX] = new PlayerTile();
    }

    check(x: number, y: number, keyConfiguration: KeyConfiguration): boolean {
        return this.map[y][x].doesFit(keyConfiguration);
    }
}