
interface RawTileValue {
    transform(): Tile;
}
class AirValue implements RawTileValue {
    transform(): Tile {
        return new Air();
    }
}
class FluxValue implements RawTileValue {
    transform(): Tile {
        return new Flux();
    }
}
class UnbreakableValue implements RawTileValue {
    transform(): Tile {
        return new Unbreakable();
    }
}
class PlayerValue implements RawTileValue {
    transform(): Tile {
        return new PlayerTile();
    }
}
class StoneValue implements RawTileValue {
    transform(): Tile {
        return new Stone(new Resting());
    }
}
class BoxValue implements RawTileValue {
    transform(): Tile {
        return new Box(new Resting());
    }
}
class Key1Value implements RawTileValue {
    transform(): Tile {
        return new MyKey(KEY_CONFIGURATION_1);
    }
}
class Lock1Value implements RawTileValue {
    transform(): Tile {
        return new MyLock(KEY_CONFIGURATION_1);
    }
}
class Key2Value implements RawTileValue {
    transform(): Tile {
        return new MyKey(KEY_CONFIGURATION_2);
    }
}
class Lock2Value implements RawTileValue {
    transform(): Tile {
        return new MyLock(KEY_CONFIGURATION_2);
    }
}

class RawTile {
    static readonly AIR = new RawTile(new AirValue());
    static readonly FLUX = new RawTile(new FluxValue());
    static readonly UNBREAKABLE = new RawTile(new UnbreakableValue());
    static readonly PLAYER = new RawTile(new PlayerValue());
    static readonly STONE = new RawTile(new StoneValue());
    static readonly BOX = new RawTile(new BoxValue());
    static readonly KEY_1 = new RawTile(new Key1Value());
    static readonly LOCK_1 = new RawTile(new Lock1Value());
    static readonly KEY_2 = new RawTile(new Key2Value());
    static readonly LOCK_2 = new RawTile(new Lock2Value());

    private constructor(private tileValue: RawTileValue) {}

    transform(): Tile {
        return this.tileValue.transform();
    }
}

const RAW_TILES = [
    RawTile.AIR,
    RawTile.FLUX,
    RawTile.UNBREAKABLE,
    RawTile.PLAYER,
    RawTile.STONE,
    RawTile.BOX,
    RawTile.KEY_1,
    RawTile.LOCK_1,
    RawTile.KEY_2,
    RawTile.LOCK_2,
]
