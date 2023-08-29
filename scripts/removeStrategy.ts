
interface RemoveStrategy {
    check(x: number, y: number): boolean;
}

class RemoveLock1 implements RemoveStrategy {
    check(x: number, y: number): boolean {
        return map.check(x, y, KEY_CONFIGURATION_1);
    }
}

class RemoveLock2 implements RemoveStrategy {
    check(x: number, y: number): boolean {
        return map.check(x, y, KEY_CONFIGURATION_2);
    }
}