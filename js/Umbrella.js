class Umbrella {
    constructor() {
        var options = { isStatic: true }
        this.body = Bodies.rectangle(200, 510, 80, 210, options);
        World.add(world, this.body);

    }

}