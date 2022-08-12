import { Entity } from "./Entity";
//ewwwwwwwwwwww

interface Clicked {
    "left": boolean;
    "right": boolean;
    "middle": boolean;
}

export class Cursor extends Entity {
    public clicked: Clicked;

    public img = love.graphics.newImage("res/cursor.png");

    constructor() {
        super();
        this.clicked = {
            "left": false,
            "middle": false,
            "right": false
        }
        this.x = 0;
        this.y = 0;
        this.width = this.img.getWidth();
        this.height = this.img.getHeight();
    }

    draw(): void {
        love.graphics.setColor(
            love.math.colorFromBytes(this.clicked.left ? [225, 235, 94]
                : this.clicked.right ? [240, 105, 98]
                : this.clicked.middle ? [68, 152, 242]
                : [255, 255, 255])
        );
        //love.graphics.rectangle("fill", this.x, this.y, 15, 15);
        love.graphics.draw(this.img, this.x, this.y);
        love.graphics.setColor(1, 1, 1);
    }

    update(dt: number): void {
        if (love.mouse.isDown(1)) {
            this.clicked.left = true;
            this.clicked.right = false;
            this.clicked.middle = false
        } else if (love.mouse.isDown(2)) {
            this.clicked.left = false;
            this.clicked.right = true;
            this.clicked.middle = false
        } else if (love.mouse.isDown(3)) {
            this.clicked.left = false;
            this.clicked.right = false;
            this.clicked.middle = true;
        } else {
            this.clicked.left = false;
            this.clicked.right = false;
            this.clicked.middle = false
        }
    }
}
