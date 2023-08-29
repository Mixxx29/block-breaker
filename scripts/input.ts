
interface Input {
    handle(): void;
}

class Up implements Input {
    handle(): void {
        player.moveVertical(-1);
    }
}

class Down implements Input {
    handle(): void {
        player.moveVertical(1);
    }
}

class Left implements Input {
    handle(): void {
        player.moveHorizontal(-1);
    }
}

class Right implements Input {
    handle(): void {
        player.moveHorizontal(1);
    }
}

let inputs: Input[] = [];

const LEFT_KEY = "ArrowLeft";
const UP_KEY = "ArrowUp";
const RIGHT_KEY = "ArrowRight";
const DOWN_KEY = "ArrowDown";
window.addEventListener("keydown", e => {
    if (e.key === LEFT_KEY || e.key === "a") inputs.push(new Left());
    else if (e.key === UP_KEY || e.key === "w") inputs.push(new Up());
    else if (e.key === RIGHT_KEY || e.key === "d") inputs.push(new Right());
    else if (e.key === DOWN_KEY || e.key === "s") inputs.push(new Down());
});