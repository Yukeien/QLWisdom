<template>
    <div class="apollo">
        <p>{{ hello }}</p>
    </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
    name: "Query",
    apollo: {
        hello: gql`query {
            hello
        }`
    }
};
</script>