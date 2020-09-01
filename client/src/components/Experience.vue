<template>
    <div id="#experience">
        <a name="experience"><h3>Experiences</h3></a>
        <div class="justify-center items-stretch q-pa-md row q-gutter-md">
            <q-card class="my-card text-white"
            style="background: radial-gradient(circle, #35a2ff 70%, #014a88 100%)"
            v-for="experience in experiences" :key="experience.id">
                <q-card-section>
                    <div class="text-h6">{{experience.title}}</div>
                    <div class="text-subtitle2">{{experience.company}}</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    {{ experience.description }}
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
    name: "Experience",
    apollo: {
        experiences: gql`query {
            experiences: getAllExperiences {
                id,
                title,
                location,
                company,
                dateBegin,
                dateEnd,
                description
            }
        }`
    }
};
</script>

<style>
.my-card {
    width: 30%;
}
</style>