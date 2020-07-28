<template>
    <div id="app">
        <Topbar/>
        <div id="main-content">
            <img alt="Vue logo" src="./assets/logo.png">
            <Query/>
            <HelloWorld :msg="message"/>
            <input type="text" v-model="message">
            <button @click="alertMessage">Alert</button>
            <br>
            <br>
            <br>
            <br>
            <AboutMe/>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <Education/>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <Experience/>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
                        <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <p>Test</p>
        </div>
    </div>
</template>

<script>
import Topbar from './components/Topbar.vue';
import HelloWorld from './components/HelloWorld.vue';
import Query from './components/Query.vue';
import AboutMe from './components/AboutMe.vue';
import Education from './components/Education.vue';
import Experience from './components/Experience.vue';

export default {
  name: 'App',
  components: {
    Topbar,
    HelloWorld,
    Query,
    AboutMe,
    Education,
    Experience
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
}

#main-content {
    margin-top: 60px;
}

a.anchor {
    top: -50px;
}
</style>
