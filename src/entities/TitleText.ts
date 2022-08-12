import { Font, Text } from "love.graphics";

import { BackgroundScreen } from "./BackgroundScreen";
import { Entity } from "./Entity";

export class TitleText extends Entity {
    private text: Text;
    private textStr: string;
    private font: Font;
    private parent: BackgroundScreen;

    constructor(parent: BackgroundScreen) {
        super();
        this.parent = parent;
        this.x = love.graphics.getWidth() / 4;
        this.y = love.graphics.getHeight() / 2;
        this.height = 36;
        this.font = love.graphics.newFont("res/dos.ttf", this.height);
        this.textStr = "The Balls";
        this.text = love.graphics.newText(this.font, this.textStr);
        this.width = this.font.getWidth(this.textStr);
    }

    draw(): void {
        love.graphics.setColor(love.math.colorFromBytes(this.parent.color));
        love.graphics.rectangle("fill", this.x, this.y, this.width, this.height);
        love.graphics.setColor(1, 1, 1);
        love.graphics.draw(this.text, this.x, this.y);
    }
}
