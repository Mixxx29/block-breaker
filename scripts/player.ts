
class Player {
    constructor(private x: number, private y: number) {}

    draw(g: CanvasRenderingContext2D) {
        g.fillStyle = "#ff0000";
        g.fillRect(this.x * TILE_SIZE, this.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    move(dx: number, dy: number) {
        this.moveToTile(this.x + dx, this.y + dy);
    }

    moveHorizontal(dx: number): void {
        map.moveHorizontal(this.x, this.y, dx);
    }

    moveVertical(dy: number): void {
        map.moveVertical(this.x, this.y, dy);
    }

    pushHorizontal(dx: number): void {
        map.pushHorizontal(this.x, this.y, dx);
    }

    private moveToTile(newX: number, newY: number) {
        map.movePlayer(this.x, this.y, newX, newY);
        this.x = newX;
        this.y = newY;
    }
}