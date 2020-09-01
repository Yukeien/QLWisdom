import App from './App.vue';
import Game from './components/Game.vue';
import NotFound from './components/NotFound.vue';

export const routes = {
    "/": App,
    "/game": Game,
    "/not-found": NotFound,
};

// Implement true routing strategy