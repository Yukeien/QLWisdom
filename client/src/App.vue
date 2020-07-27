<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Query/>
    <HelloWorld :msg="message"/>
    <input type="text" v-model="message">
    <button @click="alertMessage">Alert</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Query from './components/Query.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Query
  },
  data() {
    return {
      message: "Hello World!"
    };
  },
  methods: {
    alertMessage() {
      alert(this.message);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
