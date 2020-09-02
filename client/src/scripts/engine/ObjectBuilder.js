import { BoxGeometry, MeshBasicMaterial, Mesh } from "three";

export default class ObjectBuilder {
    constructor() {
        // use reflection to build this object automatically
        this.buildTypes = {
            "cube": this.buildCube
        }
    }

    checkBuildRequirements(parameters, requirements) {
        requirements.forEach(function(requirement) {
            if (!(requirement in parameters)) {
                return(false);
            }
        })

        return(true);
    }

    buildCube(self, parameters, material) {
        let requirements = ["width", "height", "depth"];

        if (!self.checkBuildRequirements(parameters, requirements)) {
            return null;
        }

        let geometry = new BoxGeometry(parameters["width"], parameters["height"], parameters["depth"]);
        // implement true extensive material handling
        let basicMaterial = new MeshBasicMaterial(material);
        let cube = new Mesh(geometry, basicMaterial);

        return(cube);
    }

    create(type, parameters, material) {
        if (!(type in this.buildTypes)) {
            return null;
        }

        let object = this.buildTypes[type](this, parameters, material);

        return(object);
    }
}