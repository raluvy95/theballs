import { Cursor } from "./entities/Cursor";
import { BackgroundScreen } from "./entities/BackgroundScreen";
import { Object } from "./entities/Object";
import randomNumber from "./utils/trueRandom";

let bgScreen: BackgroundScreen
let cursor: Cursor;
let tableOfObjects: LuaMap<string, Object>;

love.mouse.setVisible(false);

love.load = () => {
    bgScreen = new BackgroundScreen();
    cursor = new Cursor();
    tableOfObjects = new LuaMap();
    for (const i of $range(0, 9)) {
        const randomXY = [randomNumber(760), randomNumber(490)];
        tableOfObjects.set(`${os.clock() + i}`, new Object(randomXY[0], randomXY[1]));
    }
};

love.draw = () => {
    bgScreen.draw();

    for (const [_, obj] of tableOfObjects) {
        obj.draw()
    }
    love.graphics.print("Click to drag | Left click to remove | Middle click to add", 0, 15)

    cursor.draw();

};

love.update = dt => {
    bgScreen.update(dt);
    cursor.update(dt);
    for (const [_, obj] of tableOfObjects) {
        obj.update(dt)
    }
};

love.mousemoved = (x, y, dx, dy) => {
    cursor.x = x;
    cursor.y = y;

    if (bgScreen.text.coll(cursor) && cursor.clicked.left) {
        bgScreen.text.x += dx
        bgScreen.text.y += dy
    }

    for (const [_, obj] of tableOfObjects) {
        if (obj.coll(cursor)) {
            if (cursor.clicked.left) {
                obj.x += dx
                obj.y += dy
            }
        }
    }
}

love.mousepressed = (x, y, btn) => {
    if (btn == 1) {
        if(bgScreen.reset.coll(cursor)) {
            tableOfObjects = new LuaMap()
        }
    }
    else if(btn == 2) {
        for (const [k, obj] of tableOfObjects) {
            if (obj.coll(cursor)) {
                tableOfObjects.delete(k)
            }
        }
    } else if(btn == 3) {
        tableOfObjects.set(os.clock().toString(), new Object(love.mouse.getPosition()[0], love.mouse.getPosition()[1]))
    }
}