
enum RawKeyConfiguration {
    LOCK_1,
    LOCK_2
}

class KeyConfiguration {
    constructor(
        private id: RawKeyConfiguration,
        private color: string,
        private removeStrategy: RemoveStrategy
    ) { }

    removeLock() {
        map.remove(this.removeStrategy);
    }

    setColor(g: CanvasRenderingContext2D) {
        g.fillStyle = this.color;
    }

    doesFIt(keyConfiguration: KeyConfiguration) {
        return this.id === keyConfiguration.id;
    }
}

const KEY_CONFIGURATION_1 = new KeyConfiguration(RawKeyConfiguration.LOCK_1, "#ffcc00", new RemoveLock1());
const KEY_CONFIGURATION_2 = new KeyConfiguration(RawKeyConfiguration.LOCK_2, "#00ccff", new RemoveLock2());