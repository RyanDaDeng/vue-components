<template>
    <div>
        <div class="mb-3" v-for="post in value" v-bind:key="post.id">
            <b-card class="shadow-sm rounded">

                <b-row>
                    <b-col cols="1">
                        <b-img v-bind="imageClass" :src="post.app_image"></b-img>
                    </b-col>
                    <b-col>
                        <h5>{{post.title}} - {{post.submitted_time}}</h5>
                    </b-col>
                    <b-col>
                        <strong class="float-right">
                            <em>By {{post.author}} - {{post.submitted_time}}</em>
                            <p> comments: {{post.total_comments}}</p>
                        </strong>
                    </b-col>
                </b-row>

            </b-card>
        </div>
    </div>
</template>

<script>
    import {
        BRow,
        BCol,
        BCard,
        BImg,
    } from 'bootstrap-vue/src/index';

    export default {
        props: ['value'],
        components: {
            BCard,
            BRow,
            BCol,
            BImg
        },
        data() {
            return {
                imageClass: {width: 45, height: 45, class: 'm1'},
            }
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


    .card:hover {
        box-shadow: none !important;
        /*transform: translateY(-2px);*/
        cursor: pointer;
        /*transition: all 1s;*/
        border-color: deepskyblue;
        border-width: 2px;
        /*box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.16);*/
    }
</style>
