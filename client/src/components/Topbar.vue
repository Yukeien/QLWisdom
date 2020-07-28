<template>
  <div id="topbar">
    <q-toolbar class="bg-blue text-white shadow-2">
      <q-btn flat label="Homepage" />
      <q-space />

      <q-tabs shrink>
        <a href="#about-me">
            <q-tab name="about-me" label="About Me" />
        </a>
        <a href="#education">
            <q-tab name="education" label="Education" />
        </a>
        <a href="#experience">
            <q-tab name="experience" label="Experience" />
        </a>
      </q-tabs>
    </q-toolbar>
  </div>
</template>

<script>
    export default {
        name: "Topbar"
    }
</script>

<style>
#topbar {
    position: fixed;
    top: 0px;
    width: 100%;
}
</style>