import Vue from 'vue';
import VueApollo from 'vue-apollo';
import App from './App.vue';

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

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

new Vue({
    el: '#app',
    apolloProvider,
    render: h => h(App)
});
