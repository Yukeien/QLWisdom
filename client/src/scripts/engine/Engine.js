import { WebGLRenderer, Scene, PerspectiveCamera } from "three";
import ObjectManager from "./ObjectManager";
import ObjectBuilder from "./ObjectBuilder";

export default class Engine {
    constructor(canvas) {
        this.window = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        this.renderer = new WebGLRenderer({canvas});
        this.scene = new Scene();
        this.camera = new PerspectiveCamera(75, this.window.width / this.window.height, 0.1, 1000);

        this.manager = new ObjectManager();
        this.builder = new ObjectBuilder();
        // todo
        this.reloadFunctions = [];

        this.renderer.setSize(this.window.width, this.window.height);

        this.camera.position.z = 5;
    }

    getDomElement() {
        return(this.renderer.domElement);
    }

    addObject(id, object) {
        this.manager.addObject(id, object);
    }

    createObject(id, type, parameters, material) {
        let object = this.builder.create(type, parameters, material);

        if (!object) {
            return(false);
        }

        this.manager.addObject(id, object);

        return(true);
    }

    registerObjects() {
        let scene = this.scene;
        let objects = this.manager.getSceneObjects();

        objects.forEach(function(object) {
            scene.add(object);
        });
    }

    render(time) {
        time *= 0.001;

        this.registerObjects();

        let cube = this.manager.getObject("cube");
        cube.rotation.x = time;
        cube.rotation.y = time;

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render.bind(this));
    }
}
