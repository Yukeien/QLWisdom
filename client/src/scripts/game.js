import { BoxGeometry, MeshBasicMaterial, Mesh } from "three";
import Engine from './engine/Engine';

function main(canvas) {
    var engine = new Engine(canvas);

    var geometry = new BoxGeometry(1, 1, 1);
    var material = new MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new Mesh(geometry, material);
    
    engine.addObject("cube", cube);
    engine.render();
}

export default {
    name: 'Game',
    mounted: function() {
        main(document.querySelector("#game-engine"));
    }
}