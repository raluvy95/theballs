import checkCollission from "../utils/collision";

export class Entity {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public time: number;

    public static coll(a: Entity, b: Entity): boolean {
        return checkCollission(a, b);
    }

    coll(obj: Entity): boolean {
        return checkCollission(this, obj);
    }

    draw(): void {
        //return;
    }

    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    update(dt: number): void {
        //return;
    }
}
