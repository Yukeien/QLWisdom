import { BoxGeometry, MeshBasicMaterial, Mesh } from "three";
import Engine from './engine/Engine';

function main(canvas) {
    var engine = new Engine(canvas);
    
    let material = { color: 0x00ff00 };
    let params = {
        width: 1,
        height: 1,
        depth: 1
    };

    engine.getCamera.position.y = engine.getCamera.position.y + 5;

    console.log(engine.getCamera.rotation);
    engine.getCamera.rotation.x = engine.getCamera.rotation.x - 0.5;

    engine.createObject("cube", "cube", params, material);
    engine.createObject("cube1", "cube", params, material);
    engine.createObject("cube2", "cube", params, material);
    engine.createObject("cube3", "cube", params, material);

    engine.getManager.getObject("cube1").position.x += 1;
    engine.getManager.getObject("cube2").position.x += 2;
    engine.getManager.getObject("cube3").position.x += 3;

    engine.getManager.getObject("cube2").position.z -= 1;
    engine.getManager.getObject("cube3").position.z -= 2;

    engine.render();
}

export default {
    name: 'Game',
    mounted: function() {
        main(document.querySelector("#game-engine"));
    }
}