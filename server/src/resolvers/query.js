import { Experience } from '../database/models/Experience.js';

export const Query = {
    async hello() {
        return "Hello world!";
    },

    async getAllExperiences() {
        return Experience.findAll()
    }
}