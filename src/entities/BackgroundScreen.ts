import { Font, Text } from "love.graphics";
import fadeColor from "../utils/fadeColor";
import { Entity } from "./Entity";
import { TitleText } from "./TitleText";

type ColorBit = [number, number, number]

class Reset extends Entity {
    private core: Text;
    private font: Font;
    private text: string;

    constructor() {
        super()
        this.x = love.graphics.getWidth() / 4
        this.y = love.graphics.getHeight() / 2
        this.height = 32;
        this.text = "Reset"; 
        this.font = love.graphics.newFont("res/dos.ttf", this.height)
        this.core = love.graphics.newText(this.font, this.text);
        this.width = this.font.getWidth(this.text)
    }

    draw(): void {
        love.graphics.draw(this.core, this.x, this.y)
    }
}

export class BackgroundScreen extends Entity {
    public color: ColorBit;
    public text: TitleText;
    public reset: Reset;

    constructor() {
        super();
        this.width = 800;
        this.height = 600;
        this.time = 0;
        this.color = [5, 6, 3];
        this.text = new TitleText(this);
        this.reset = new Reset();
    }

    draw(): void {
        this.reset.draw()
        this.text.draw()
        love.graphics.setBackgroundColor(love.math.colorFromBytes(this.color));
    }

    update(dt: number): void {
        this.text.update(dt);
        this.color = fadeColor(dt, this.color, [53, 137, 202], 50);
    }
}
