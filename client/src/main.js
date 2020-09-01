import Vue from 'vue';
import VueApollo from 'vue-apollo';

import { routes } from './routing.js';

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './quasar'

const httpLink = createHttpLink({
    uri: 'http://localhost:8080/graphql'
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    link: httpLink,
    cache
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

Vue.use(VueApollo);
Vue.config.productionTip = false;

console.log(routes);

new Vue({
    el: "#app",
    provide: apolloProvider,
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        viewComponent() {
            return routes[this.currentRoute] || routes["/not-found"]
        }
    },
    render(h) {
        return h(this.viewComponent);
    }
});
