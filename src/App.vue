<template>
    <div id="app">

        <div>
            <!-- As a heading -->
            <b-navbar variant="light" type="light" sticky>
                <b-navbar-brand tag="h1" class="mb-0">Ryan's workspace</b-navbar-brand>
            </b-navbar>

            <b-col cols="2">
                <b-nav vertical class="w-25 float-left" style="position:fixed;">
                    <b-nav-item @click="openLink(component.url)" :active="component.active"
                                v-for="(component,key) in components" :key="key">
                        {{component.name}}
                    </b-nav-item>
                </b-nav>
            </b-col>
            <b-container class="mt-5">
                <b-row>
                    <b-col offset="2" cols="10">
                        <b-container>
                            <demo-card :id="'about_me'">
                                <template v-slot:title>
                                    About Me
                                </template>

                                <template v-slot:component>
                                    <a href="https://github.com/RyanDaDeng" target="_blank">GitHub</a>.
                                    <a href="https://www.linkedin.com/in/ryandeng/" target="_blank">Linkedin</a>.
                                </template>

                            </demo-card>

                            <demo-card :id="'recurrence_editor'">
                                <template v-slot:title>
                                    Recurrence Editor
                                </template>

                                <template v-slot:component>
                                    <recurrence-editor v-model="recurrence"></recurrence-editor>
                                </template>

                                <template v-slot:model>
                                    <pre>{{ recurrence | pretty }}</pre>
                                </template>

                            </demo-card>


                            <demo-card :id="'question_maker'">

                                <template v-slot:title>
                                    Question Maker
                                </template>

                                <template v-slot:component>
                                    <question-maker :questions="questions" :limit="5"></question-maker>
                                </template>

                                <template v-slot:model>
                                    <pre>{{ questions | pretty }}</pre>
                                </template>
                            </demo-card>


                            <demo-card :id="'slack_button'">
                                <template v-slot:title>
                                    Slack Button
                                </template>

                                <template v-slot:component>
                                    <slack-button installUrl="#" button-name="Add to Slack"></slack-button>
                                    <hr>
                                    <slack-button installUrl="#" button-name="Sign in with Slack"></slack-button>
                                </template>


                            </demo-card>


                            <demo-card :id="'tag_selector'">
                                <template v-slot:title>
                                    Tag Selector
                                </template>

                                <template v-slot:component>
                                    <tag-selector v-model="selected_users" :objects="users"
                                                  :state="false"></tag-selector>
                                    <hr>
                                    <tag-selector v-model="selected_users" :objects="users"
                                                  :state="true"></tag-selector>
                                </template>

                                <template v-slot:model>
                                    <pre>{{ selected_users | pretty }}</pre>
                                </template>
                            </demo-card>
                        </b-container>
                    </b-col>

                </b-row>


            </b-container>
        </div>

    </div>
</template>

<script>
    import RecurrenceEditor from './components/RecurrenceEditor.vue'
    import {BContainer} from 'bootstrap-vue'
    import QuestionMaker from './components/QuestionMaker.vue'
    import DemoCard from './components/DemoCard.vue'
    import {
        BCol,
        BRow,
        BNav,
        BNavItem,
        BNavbar,
        BNavbarBrand

    } from 'bootstrap-vue';
    import SlackButton from "./components/SlackButton";
    import TagSelector from "./components/TagSelector";

    export default {
        name: 'App',
        filters: {
            pretty: function (value) {
                return JSON.stringify((value), null, 2);
            }
        },
        methods: {
            openLink(url) {
                 window.open(url, '_blank');
            }
        },
        data() {
            return {
                components: [
                    {
                        name: 'About Me',
                        active: true,
                        url: '#about_me'
                    },
                    {
                        name: 'Vue - Recurrence Editor',
                        active: false,
                        url: '#recurrence_editor'
                    },
                    {
                        name: 'Vue - Question Maker',
                        active: false,
                        url: '#question_maker'
                    },
                    {
                        name: 'Vue - Slack Button',
                        active: false,
                        url: '#slack_button'
                    },
                    {
                        name: 'Vue - Tag Selector',
                        active: false,
                        url: '#tag_selector'
                    },
                    {
                        name: 'Laravel - Google reCAPTACHA v3',
                        active: false,
                        url: 'https://github.com/RyanDaDeng/laravel-google-recaptcha-v3'
                    },
                    {
                        name: 'Laravel - Google reCAPTACHA v2',
                        active: false,
                        url: 'https://github.com/RyanDaDeng/laravel-google-recaptcha-v2'
                    },
                    {
                        name: 'Laravel - DTO generator',
                        active: false,
                        url: 'https://github.com/RyanDaDeng/laravel-dto-generator'
                    },
                    {
                        name: 'Laravel - SucrePay SecureFrame',
                        active: false,
                        url: 'https://github.com/RyanDaDeng/securepay-secureframe'
                    },
                    {
                        name: 'Laravel - Todo Management System',
                        active: false,
                        url: 'https://github.com/RyanDaDeng/timehunter'
                    },
                ],
                recurrence: null,
                selected_users: [
                    "2", "1"
                ],
                users: [
                    {
                        value: '1',
                        text: 'Ryan Deng',
                        img: 'https://avatars1.githubusercontent.com/u/54710951?s=70&v=4'
                    },
                    {
                        value: '2',
                        text: 'Peter Lee',
                        img: 'https://avatars1.githubusercontent.com/u/54710951?s=70&v=4'
                    },
                    {
                        value: '3',
                        text: 'Michale Yi',
                        img: 'https://avatars1.githubusercontent.com/u/54710951?s=70&v=4'
                    },
                    {
                        value: '4',
                        text: 'Tom Zhang',
                        img: 'https://avatars1.githubusercontent.com/u/54710951?s=70&v=4'
                    },

                ],
                questions: [
                    {
                        sort: 3,
                        subject: 'Anything blocking your progress?'
                    },
                    {
                        sort: 1,
                        subject: 'What did you do since {last_report_date}?'
                    },
                    {
                        sort: 2,
                        subject: 'What will you do today?'
                    },
                ]
            }
        },
        components: {
            TagSelector,
            SlackButton,
            BCol,
            BRow,
            BNav,
            BNavItem,
            DemoCard,
            BContainer,
            RecurrenceEditor,
            QuestionMaker,
            BNavbar,
            BNavbarBrand
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
