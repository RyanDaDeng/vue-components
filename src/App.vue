<template>
    <div id="app">

        <div>
            <!-- As a heading -->
            <b-navbar variant="light" type="light" sticky style="position: fixed;">
                <b-navbar-brand tag="h1" class="mb-0">Ryan's Workspace</b-navbar-brand>


                <b-navbar-nav class="ml-auto">

                       <span style="font-size: 2em; color: Dodgerblue;cursor:pointer;" class="mr-1">
                                           <b-img width='32'
                                                  style="margin-bottom:9px;"
                                                  height="32"
                                                  @click="openLink('https://slackit.io')"
                                                  src="https://slackit.io/img/slackit-logo.png"></b-img></span>

                    <span style="font-size: 2em; color: Dodgerblue;cursor:pointer;" class="mr-1"
                          @click="openLink('https://github.com/RyanDaDeng')"><i
                            class="fab fa-github"></i></span>

                    <span style="font-size: 2em; color: Mediumslateblue;cursor:pointer;"
                          @click="openLink('https://www.linkedin.com/in/ryandeng')"><i
                            class="fab fa-linkedin"></i></span>

                </b-navbar-nav>

            </b-navbar>


            <b-col cols="2" class="mt-5">
                <b-nav vertical class="w-25 float-left" style="position:fixed;">
                    <b-nav-item class="hvr-underline-from-center" :href="!component.isLink ? component.url:'#'"
                                @click="openLink(component.url)"
                                :active="component.active"
                                v-for="(component,key) in components" :key="key">
                        {{component.name}}
                    </b-nav-item>
                </b-nav>
            </b-col>
            <b-container style="margin-top: 80px;">
                <b-row>
                    <b-col offset="2" cols="10">

                        <demo-card :id="'about_me'">
                            <template v-slot:title>
                                About Me
                            </template>

                            <template v-slot:component>
                                       <span style="font-size: 2em; color: Dodgerblue;cursor:pointer;" class="mr-1">
                                           <b-img width='32'
                                                  style="margin-bottom:9px;"
                                                  height="32"
                                                  @click="openLink('https://slackit.io')"
                                                  src="https://slackit.io/img/slackit-logo.png"></b-img></span>

                                <span style="font-size: 2em; color: Dodgerblue;cursor:pointer;" class="mr-1"
                                      @click="openLink('https://github.com/RyanDaDeng')"><i
                                        class="fab fa-github"></i></span>

                                <span style="font-size: 2em; color: Mediumslateblue;cursor:pointer;"
                                      @click="openLink('https://www.linkedin.com/in/ryandeng')"><i
                                        class="fab fa-linkedin"></i></span>

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
                                <tag-selector v-model="selected_users_2" :objects="users"
                                              :state="true"></tag-selector>
                            </template>

                            <template v-slot:model>
                                <pre>{{ selected_users | pretty }}</pre>

                                <hr>
                                <pre>{{ selected_users_2 | pretty }}</pre>
                            </template>
                        </demo-card>

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
        BNavbarBrand,
        BNavbarNav,
        BImg

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
                if (url.startsWith("http")) {
                    window.open(url, '_blank');
                }
            }
        },
        data() {
            return {
                components: [
                    {
                        name: 'About Me',
                        active: true,
                        url: '#about_me',
                        isLink: false,
                    },
                    {
                        name: 'Project - Slackit',
                        active: true,
                        url: 'https://slackit.io',
                        isLink: true,
                    },
                    {
                        name: 'Vue - Recurrence Editor',
                        active: false,
                        url: '#recurrence_editor',
                        isLink: false,
                    },
                    {
                        name: 'Vue - Question Maker',
                        active: false,
                        url: '#question_maker',
                        isLink: false,
                    },
                    {
                        name: 'Vue - Slack Button',
                        active: false,
                        url: '#slack_button',
                        isLink: false,
                    },
                    {
                        name: 'Vue - Tag Selector',
                        active: false,
                        url: '#tag_selector',
                        isLink: false,
                    },
                    {
                        name: 'Laravel - Google reCAPTACHA v3',
                        active: false,
                        url: 'https://github.com/RyanDaDeng/laravel-google-recaptcha-v3',
                        isLink: true,
                    },
                    {
                        name: 'Laravel - Google reCAPTACHA v2',
                        active: false,
                        url: 'https://github.com/RyanDaDeng/laravel-google-recaptcha-v2',
                        isLink: true,
                    },
                    {
                        name: 'Laravel - DTO generator',
                        active: false,
                        url: 'https://github.com/RyanDaDeng/laravel-dto-generator',

                        isLink: true,
                    },
                    {
                        name: 'Laravel - SucrePay SecureFrame',
                        active: false,
                        url: 'https://github.com/RyanDaDeng/securepay-secureframe',
                        isLink: true,
                    },
                    {
                        name: 'Laravel - Todo Management System',
                        active: false,
                        url: 'https://github.com/RyanDaDeng/timehunter',
                        isLink: true,
                    },
                ],
                recurrence: null,
                selected_users: [
                    "2", "1"
                ],
                selected_users_2: [
                    "3"
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
            BNavbarBrand,
            BNavbarNav,
            BImg
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

    /* Underline From Center */
    .hvr-underline-from-center {
        width: 80%;
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -moz-osx-font-smoothing: grayscale;
        position: relative;
        overflow: hidden;
    }

    .hvr-underline-from-center:before {
        content: "";
        position: absolute;
        z-index: -1;
        left: 50%;
        right: 50%;
        bottom: 0;
        background: #2098d1;
        height: 4px;
        -webkit-transition-property: left, right;
        transition-property: left, right;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }

    .hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before {
        left: 0;
        right: 0;
    }
</style>
