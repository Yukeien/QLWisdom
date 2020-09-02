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

    engine.createObject("cube", "cube", params, material);
    engine.render();
}

export default {
    name: 'Game',
    mounted: function() {
        main(document.querySelector("#game-engine"));
    }
}