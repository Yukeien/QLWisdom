<template>
    <div id="#experience">
        <a name="experience"><h1>Experiences</h1></a>
        <div v-for="experience in experiences" :key="experience.id">
            <p>{{ experience.title}} at {{ experience.company}}</p>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
    name: "Query",
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