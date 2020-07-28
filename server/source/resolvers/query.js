import { Experience } from '../database/models/Experience.js';

export const Query = {
    async hello(root, args) {
        return "Hello world!";
    },

    async getAllExperiences(root, args, { models }) {
        console.log("La route est bonne")
        console.log(root);
        return Experience.findAll()
    }
}