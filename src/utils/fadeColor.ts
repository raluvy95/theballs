type RGB = [number, number, number];

export default function fadeColor(dt: number, color: RGB, dColor: RGB, times: number = 10): RGB {
    if (color.every((val, i) => val == dColor[i])) {
        return dColor;
    } else {
        let [r, g, b] = color;
        let [dr, dg, db] = dColor;
        if (r != dr) {
            if (r < dr) {
                r += times * dt;
            } else {
                r -= times * dt;
            }
        }
        if (g != dg) {
            if (g < dg) {
                g += times * dt;
            } else {
                g -= times * dt;
            }
        }
        if (b != db) {
            if (b < db) {
                b += times * dt;
            } else {
                b -= times * dt;
            }
        }
        return [r, g, b];
    }
}
