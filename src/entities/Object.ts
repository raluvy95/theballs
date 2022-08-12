import { Entity } from "./Entity";

export class Object extends Entity {
    constructor(x: number, y: number) {
        super();
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
    }

    draw() {
        love.graphics.ellipse("fill", this.x, this.y, this.width, this.height);
    }
}
