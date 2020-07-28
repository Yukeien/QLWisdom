import { initExperienceModel } from './models/Experience';

export function registerModels(database) {
    initExperienceModel(database);
}