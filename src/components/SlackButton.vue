<template>
    <b-button variant="white"
              class="slackit-link font-weight-bold shadow text-center"
              size="lg"
              text-variant="white" pill :href="installUrl">
        <img src="https://geekbot.com/landing/slack-logo.svg" alt="slack logo" class="mr-3" width="30px"
             height="30px">
        {{buttonName}}
    </b-button>
</template>

<script>
    import {BButton} from 'bootstrap-vue';

    export default {
        props: {
            installUrl: {
                type: String,
                required: true
            },
            buttonName: {
                type: String,
                default: 'Add to Slack'
            }
        },
        components: {BButton},
        data: function () {
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
    .btn:hover {
        color: #3490DC;
        transform: translateY(-2px);
        box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.16);
    }
</style>
