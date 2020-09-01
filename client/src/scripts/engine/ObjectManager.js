export default class ObjectManager {
    constructor() {
        this.objects = {}
    }

    addObject(key, object) {
        this.objects[key] = {
            obj: object,
            hide: false,
            displayed: false
        };
    }

    getObject(key) {
        return(this.objects[key].obj);
    }

    getSceneObjects() {
        let objectList = this.objects;
        let identifiers = Object.keys(objectList);
        let objects = [];

        identifiers.forEach(function(id) {
            if (!objectList[id].hide && !objectList[id].displayed) {
                objects.push(objectList[id].obj);
                objectList[id].displayed = true;
            }
        });

        return(objects);
    }
}