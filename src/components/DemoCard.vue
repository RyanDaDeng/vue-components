<template>
    <b-card no-body class="shadow-lg p-3 mb-5 bg-white rounded" :id="id">
        <b-card-title>
            <slot name="title"></slot>
        </b-card-title>

        <b-card>
            <b-card-sub-title>
                DEMO
            </b-card-sub-title>
            <hr>
            <b-container>
                <slot name="component"></slot>
            </b-container>
        </b-card>

        <hr>
        <b-card>
            <b-card-sub-title>
                Reactive Model
            </b-card-sub-title>
            <hr>
            <pre>
                <slot name="model"></slot>
            </pre>
        </b-card>

    </b-card>

</template>

<script>
    import {BCardSubTitle, BCard, BCardTitle, BContainer} from 'bootstrap-vue'

    export default {
        props: ['value', 'id'],
        components: {
            BCardSubTitle,
            BCardTitle,
            BCard,
            BContainer,
        },
        data() {
            return {}
        },
        computed: {},
        methods: {},
        created() {
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>
